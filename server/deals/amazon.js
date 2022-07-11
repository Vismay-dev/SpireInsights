const axios          = require("axios");
const cheerio        = require("cheerio");

const keyWordAnalysis = async( domain) => {
   
    let analysis;
    await fetchResults(domain).then(async(res)=> {
        analysis = res;
    })

    return analysis;
};


const fetchResults = async (domain) => {
        let url = `https://www.amazon.${domain}/gp/new-releases/?ref_=nav_cs_newreleases`
    let response = await axios.get(url).catch(async(err)=>{
        return await fetchResults(asin,domain)              
    });
    const html = response.data
    let $
    try{
        $ = cheerio.load(html)
    }catch(err){
        return await fetchResults(asin,domain)                
    }

    let data = [
        
    ]

    for(let i = 0; i < 6; i ++){
        let item1 = {}
        let item2 = {}
        let item3 = {}
        let item4 = {}
        let item5 = {}

        for(let j = 1; j<=5; j++){
            let urlArr = $(`#zg_left_col1 > div:nth-child(${i+1}) > div div.a-row.a-carousel-controls.a-carousel-row.a-carousel-has-buttons li:nth-child(${j}) > div.zg-carousel-general-faceout a.a-link-normal`).attr('href').split('/')
            let currentData = {
                rank : $(`#zg_left_col1 > div:nth-child(${i+1}) > div div.a-row.a-carousel-controls.a-carousel-row.a-carousel-has-buttons li:nth-child(${j})`).text().substring(1,2),
                image :             $(`#zg_left_col1 > div:nth-child(${i+1}) > div div.a-row.a-carousel-controls.a-carousel-row.a-carousel-has-buttons li:nth-child(${j}) > div.zg-carousel-general-faceout img`).attr('src'),
                title : $(`#zg_left_col1 > div:nth-child(${i+1}) > div div.a-row.a-carousel-controls.a-carousel-row.a-carousel-has-buttons li:nth-child(${j}) > div.zg-carousel-general-faceout a:nth-child(2)`).text(),
                stars : $(`#zg_left_col1 > div:nth-child(${i+1}) > div div.a-row.a-carousel-controls.a-carousel-row.a-carousel-has-buttons li:nth-child(${j}) > div.zg-carousel-general-faceout div.a-row > div.a-icon-row > a.a-link-normal`).attr('title')? parseFloat($(`#zg_left_col1 > div:nth-child(${i+1}) > div div.a-row.a-carousel-controls.a-carousel-row.a-carousel-has-buttons li:nth-child(${j}) > div.zg-carousel-general-faceout div.a-row > div.a-icon-row > a.a-link-normal`).attr('title').substring(0,3)) : null,
                price : $(`#zg_left_col1 > div:nth-child(${i+1}) > div div.a-row.a-carousel-controls.a-carousel-row.a-carousel-has-buttons li:nth-child(${j}) > div.zg-carousel-general-faceout div.a-row > a`).text(),
                link: "https://www.amazon.ae/" + urlArr[1]+'/'+urlArr[2]+ '/' + urlArr[3],
                reviews: "https://www.amazon.ae/" + urlArr[1]+'/'+urlArr[2]+ '/' + urlArr[3] + '/=#customerReviews' 
            }

            if(j==1){
                item1 = currentData
            }else if(j == 2) {
                item2 = currentData
            }else if(j == 3) {
                item3 = currentData
            }else if(j == 4) {
                item4 = currentData
            }else if(j == 5) {
                item5 = currentData
            }
        }


        data.push({
            category: $(`#zg_left_col1 > div:nth-child(${i+1}) > div h2`).text().split(' ')[$(`#zg_left_col1 > div:nth-child(${i+1}) > div h2`).text().split(' ').length-1],
            item1,
            item2,
            item3,
            item4,
            item5
        })
    }
    

    return data;
};

module.exports = keyWordAnalysis