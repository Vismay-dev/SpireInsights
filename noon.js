const axios          = require("axios");
const cheerio        = require("cheerio");



const fetchResults = async (sentence,country_lang) => {
    let words = sentence.split(' ')
    fword = words.shift()
    let url = `https://www.noon.com/${country_lang}/search/?q=` + String(fword) + String(words.length>0?'%20'+words.join('%20'):'')
    let response = await axios.get(url).catch(err=>{
        return fetchResults(sentence,domain)                
    });
    const html = response.data
    let $;
    try{
        $ = cheerio.load(html)
    }catch(err){
        console.log(err)
        return fetchResults(sentence,country_lang)                
    }
 
        const results = [];
 
  $('div.productContainer').each((_idx, el) => {

            const shelf = $(el)
            const title = shelf.find('div > div > div.sc-814d9ef3-10.ctXaPp > div.sc-814d9ef3-11.fPgznn').text()
            const link = String(shelf.find('a').attr('href')).replace('amazon.com','noon.com')
            const price = shelf.find(' div > div > div.sc-814d9ef3-10.ctXaPp > div.sc-814d9ef3-12.djDQrr > div > div > strong').text()

            const reviews = shelf.find('div.a-section.a-spacing-none.a-spacing-top-micro > div.a-row.a-size-small').children('span').last().attr('aria-label')
            
            const stars = shelf.find('div > div > div.sc-814d9ef3-10.ctXaPp > div.sc-814d9ef3-13.iauOWk > div > div.sc-814d9ef3-15.hrIxkM > div > span.ratingValue').text()
            
                let element = {
                    title,
                    link: `https://noon.com${link}`,
                    price,
                }
            
                // if (details.topReviews) {
                //     element.reviews = topReviews
                // }
            
                if (stars) {
                    element.stars = stars
                }
            results.push(element)
        });        
 
        return results;
};

const topKeyWords = async (res) => {

    let topWords = res[0].title.replace('-','').replace('_','').replace('...','').replace('…','').replace('-','').split(' ');
    let topWords1 = res[1].title.replace('-','').replace('_','').replace('...','').replace('…','').replace('-','').split(' ');
    let topWords2 = []
   
   
    for(let i = 0; i < topWords.length; i++){
       for(let j = 0; j < topWords1.length; j++){
        if(topWords[i].toLowerCase() === topWords1[j].toLowerCase()){
            topWords2.push(topWords[i]);
        }
       }
   }
   let topWords3 = res[2].title.replace('-','').replace('_','').replace('...','').replace('…','').replace('-','').split(' ');
   let topWords4 = []
   for(let i = 0; i < topWords2.length; i++){
       for(let j = 0; j < topWords3.length; j++){
        if(topWords2[i].toLowerCase() === topWords3[j].toLowerCase()){
            topWords4.push(topWords2[i]);
        }
       }
   }
   function onlyUnique(value, index, self) {
       return self.indexOf(value) === index;
   }
   
   topWords2 = topWords2.filter(onlyUnique);
   topWords3 = topWords3.filter(onlyUnique);
   topWords4 = topWords4.filter(onlyUnique);
     let wordsCommTop;
     if(topWords4.length < 6){
   
       if(topWords3.length < 6){
           wordsCommTop = topWords2
       } else {
           wordsCommTop = topWords3;
       }
     } else {
       wordsCommTop = topWords4.filter(onlyUnique);
     }
     let wordCount = []
     for(let i = 0; i<wordsCommTop.length; i++){
       wordCount.push(0)
       for(let j = 0; j<res.length; j++){
           if(res[j].title.toLowerCase().split(' ').includes(wordsCommTop[i].toLowerCase())){
               wordCount[i]++
           }
       }
     }
   
   
   
     for(let x = 0;x<wordsCommTop.length;x++){
       let chk = false;
       for(let y = 0;y<wordCount.length-1-x;y++){
           if(wordCount[y] < wordCount[y+1]){
               let temp = wordCount[y];
               wordCount[y] = wordCount[y+1];
               wordCount[y+1] = temp;
               let temp2 = wordsCommTop[y];
               wordsCommTop[y] = wordsCommTop[y+1];
               wordsCommTop[y+1] = temp2;
               chk = true;
           }
       }
       if(!chk) {
           break;
       }
     }
   
   
     console.log('\nTop Key Words: \n')
     for(let i = 0; i<6; i++){
       console.log(wordsCommTop[i] + ' - Appeared in ' + wordCount[i] + ' out of ' + res.length + ' products.')
     }
   
   }
   
   const avgCompetitiveRating = async (res) => {
       
           let rating = 0.0;
           let cnt = 0;
        for(let i = 0; i < res.length; i++){
           if(res[i].stars!==undefined){
               cnt+=1;
           let num = parseFloat(String(res[i].stars).substring(0,3))
           rating = rating + (num?num:0)
           }
       }
       console.log('\nAverage Competitive Rating on Noon.com: ' + (rating/cnt).toPrecision(2))
       
   }
   
   
   const pricingResults = async (res) => {
   
        let l = parseFloat(res[0].price)
        let h = parseFloat(res[0].price)
   
        for(let i = 0; i < 20; i++){
           let currPrice = parseFloat(res[i].price)
           if(currPrice<l){
               l = currPrice
           }else if(currPrice>h){
               h = currPrice
           }
       }
       console.log('\nAverage Competitive Price Range on Noon.com: ' + 'AED ' + l + ' - ' + h)
       
   
   }
   
   const currentCompetition = async (res) => {
       
        let objArr = []
        console.log('\n')
        for(let i = 0; i < 7; i++){
           console.log('Product ' + (i+1))
           console.log('Title: ' + res[i].title)
           console.log('Price: ' + res[i].price)
           console.log('Image: ' + res[i].image)
           console.log('Link: ' + res[i].link)
           console.log('Stars: ' + res[i].stars) 
      
           console.log('\n')
           objArr.push({
               title:res[i].title,
               price:res[i].price,
               image: res[i].image,
               link:res[i].link,
               stars: res[i].stars,
           })
     
       }
   }


const keyWordAnalysis = (sentence, country_lang) => {
console.log('\nInput: ' + sentence)
fetchResults(sentence, country_lang).then(async res=> {
    topKeyWords(res)
    avgCompetitiveRating(res)
    pricingResults(res)
    let res1 = await addImages(res);
    await currentCompetition(res1)
})
}


const addImages =  async (res)=> {
    for(let i = 0; i<8; i++){
      try{

        let url = res[i].link 
        let response = await axios.get(url);
        const html = response.data
    let $;
        $ = cheerio.load(html)
        let cnt = 0;
        $('div.swiper-wrapper').each((_idx, el) => {
            cnt = cnt + 1
            if(cnt<2){
                let shelf = $(el);
                let imgUrl = $('meta[property="og:image"]').attr('content')
                res[i].image = imgUrl
            }
        
        })


    } catch(err){
        continue
    }
        }
    return res;
}