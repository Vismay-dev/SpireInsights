const dotenv         = require('dotenv')
const axios          = require("axios");
const cheerio        = require("cheerio");
const { isReadable } = require('stream');
const { http, https } = require('follow-redirects');

analysis = {
    topKeyWords : {
        words:[],
        count:[],
        totalNum:0
    },
    avgCompetitiveRating:0,
    averagePricingRange:{
        low:0,
        high:0
    },
    currentCompetition:[]
}

const topKeyWords = async (res) => {
    analysis.topKeyWords.count = []
    analysis.topKeyWords.words = []


 let topWords = res[0].title.replace('-','').replace('of','').replace('-','').replace('_','').replace('...','').replace('and','').replace('with','').replace('or','').replace('…','').replace('-','').split(' ');;
 let topWords1 = res[1].title.replace('-','').replace('of','').replace('-','').replace('_','').replace('...','').replace('and','').replace('with','').replace('or','').replace('…','').replace('-','').split(' ');;
 let topWords2 = []


 for(let i = 0; i < topWords.length; i++){
    for(let j = 0; j < topWords1.length; j++){
     if(topWords[i].toLowerCase() === topWords1[j].toLowerCase()){
         topWords2.push(topWords[i]);
     }
    }
}
let topWords3 = res[2].title.replace('-','').replace('of','').replace('-','').replace('and','').replace('with','').replace('or','').replace('_','').replace('...','').replace('…','').replace('-','').split(' ');;
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


  analysis.topKeyWords.totalNum = res.length
  for(let i = 0; i<8; i++){
    analysis.topKeyWords.words.push(wordsCommTop[i]);
    analysis.topKeyWords.count.push(wordCount[i]);
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
    analysis.avgCompetitiveRating=(rating/cnt).toPrecision(2)
}


const pricingResults = async (res) => {

     let l = parseFloat(res[0].price.split('AED')[1].trim().replace(',',''))
     let h = parseFloat(res[0].price.split('AED')[1].trim().replace(',',''))

     for(let i = 0; i < 5; i++){
        if(res[i].price.split('AED')[1]){
        let currPrice = parseFloat(res[i].price.split('AED')[1].trim().replace(',',''))
        if(currPrice<l){
            l = currPrice
        }else if(currPrice>h){
            h = currPrice
        }
    }
    }
    analysis.averagePricingRange.low=l;
    analysis.averagePricingRange.high=h;
}

const currentCompetition = async (res) => {
    analysis.currentCompetition = []
     let objArr = []
     for(let i = 0; i < 6; i++){
        let revLink = ''
        let ASIN = ''
        url =  res[i].link.replace('com','ae')
        if(String(res[i].link).indexOf("picassoRedirect")!==-1){
            await axios.get(res[i].link).then(response=> {
                ASIN = response.path.split('/')[5]
                let arrP = res[i].link.replace('com','ae').split('/');
                let lElem = arrP.pop();
               revLink = arrP.join('/')+'/=#customerReviews'
            }).catch(err=> {
                console.log(err)
            })
        }else {
            ASIN = res[i].link.split('/')[5];
            let arrP = res[i].link.split('/');
            let lElem = arrP.pop();
           revLink = arrP.join('/')+'/=#customerReviews'
        }

        revLink = revLink.replace('com','ae')
        analysis.currentCompetition.push({
            
                title:res[i].title,
                price:res[i].price,
                image: res[i].image,
                link:res[i].link.replace('com','ae'),
                stars: res[i].stars,
                reviews: revLink
    
        })

  
    }

}

const keyWordAnalysis = async(sentence, domain) => {
   
    
    await fetchResults(sentence,domain).then(async(res)=> {

        topKeyWords(res)
        avgCompetitiveRating(res)
        pricingResults(res)
        await currentCompetition(res)
    })

    return analysis;

};

const fetchResults = async (sentence,domain) => {
        let words = sentence.split(' ')
        fword = words.shift()
        let url = `https://www.amazon.${domain}/s?k=` + String(fword) + String(words.length>0?'+'+words.join('+'):'')
        let response = await axios.get(url).catch(err=>{
            return fetchResults(sentence,domain)                
        });
        const html = response.data
        let $
        try{
            $ = cheerio.load(html)
        }catch{
            return fetchResults(sentence,domain)                
        }
     
            const results = [];
     
      $('div.sg-col-4-of-12.s-result-item.s-asin.sg-col-4-of-16.sg-col.sg-col-4-of-20').each((_idx, el) => {
                const shelf = $(el)
                const title = shelf.find('span.a-size-base-plus.a-color-base.a-text-normal').text()
                const image = shelf.find('img.s-image').attr('src')
    
                const link = shelf.find('a.a-link-normal.a-text-normal').attr('href')
                
                const reviews = shelf.find('div.a-section.a-spacing-none.a-spacing-top-micro > div.a-row.a-size-small').children('span').last().attr('aria-label')
                
                const stars = shelf.find('div.a-section.a-spacing-none.a-spacing-top-micro > div > span').attr('aria-label')
                
                const price = shelf.find('span.a-price > span.a-offscreen').text()
                
                
                    let element = {
                        title,
                        image,
                        link: `https://amazon.ae${link}`,
                        price,
                    }
                
                    if (reviews) {
                        element.reviews = reviews
                    }
                
                    if (stars) {
                        element.stars = stars
                    }
                results.push(element)
            });
     
            return results;
 };


module.exports = keyWordAnalysis