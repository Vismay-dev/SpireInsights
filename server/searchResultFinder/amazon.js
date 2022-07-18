const dotenv         = require('dotenv')
const axios          = require("axios");
const cheerio        = require("cheerio");
const { isReadable } = require('stream');
const { http, https } = require('follow-redirects');


const fetchResults1 = async (sentence,domain) => {
    let words = sentence.split(' ')

    fword = words.shift()
    let url = `https://www.amazon.${domain}/s?k=` + String(fword) + String(words.length>0?'+'+words.join('+'):'')
    let response = await axios.get(url).catch(async(err)=>{
        let result = await fetchResults1(sentence,domain)  
        return result 
    });
    const html = response.data
    let $
    try{
        $ = cheerio.load(html)
    }catch{
        return await fetchResults1(sentence,domain)    
    }
    
        const resultNum = parseInt($('h1 > div > div.sg-col-14-of-20.sg-col.s-breadcrumb.sg-col-10-of-16.sg-col-6-of-12 > div > div > span:nth-child(1)').text().split(' ')[3].replace(',',''))
        return resultNum;
}

const fetchResults2 = async (sentence,domain) => {
    let words = sentence.split(' ')

    fword = words.shift()
    let url = `https://www.amazon.${domain}/s?k=` + String(fword) + String(words.length>0?'+'+words.join('+'):'')
    let response = await axios.get(url).catch(async(err)=>{
        console.log(err.response.data)
            let result = await fetchResults2(sentence,domain)  
            return result 
    });
    let $
    try{
        const html = response.data

        $ = cheerio.load(html)
    }catch{
        return await fetchResults2(sentence,domain) 
    }

    if($('h1 > div > div.sg-col-14-of-20.sg-col.s-breadcrumb.sg-col-10-of-16.sg-col-6-of-12 > div > div > span:nth-child(1)').text().split(' ')[3]){
        const resultNum = parseInt($('h1 > div > div.sg-col-14-of-20.sg-col.s-breadcrumb.sg-col-10-of-16.sg-col-6-of-12 > div > div > span:nth-child(1)').text().split(' ')[3].replace(',',''))
        return resultNum;
    }else {
        return null;
    }
}

const keyWordAnalysis = async(sentence, domain) => {
   let sr = 0;  

   if(domain === 'ae'){
  
    await fetchResults2(sentence,domain).then(async(res)=> {
        sr += res;
})
    }

    return sr;
};


module.exports = keyWordAnalysis