const axios          = require("axios");
const cheerio        = require("cheerio");

const keyWordAnalysis = async(asin, domain) => {
   
    let analysis;
    await fetchResults(asin,domain).then(async(res)=> {
        analysis = res;
    })

    return analysis;

};


const fetchResults = async (asin,domain) => {
        let url = `https://www.amazon.${domain}/dp/` + asin
    let response = await axios.get(url).catch(async(err)=>{
        return await fetchResults(asin,domain==='ae'?'com':'ae')                
    });
    const html = response.data
    let $
    try{
        $ = cheerio.load(html)
    }catch(err){
        return await fetchResults(asin,domain==='ae'?'com':'ae')                
    }

 
        const data = {};
        data.reviews = []
        if(domain === 'ae'){
        data.image = $('#main-image-container > ul > li.image.item.itemNo0.maintain-height.selected > span > span div.imgTagWrapper img').attr('src')
        data.title = $('#titleSection > h1 > span').text().trim()

        data.reviews.push($('div.a-section.review.aok-relative.cr-desktop-review-page-0:nth-child(1) div.a-section.celwidget div.a-row.a-spacing-small.review-data span.a-size-base.review-text div.a-expander-collapsed-height.a-row.a-expander-container.a-expander-partial-collapse-container div.a-expander-content.reviewText.review-text-content.a-expander-partial-collapse-content > span').text())
        data.reviews.push($('div.a-section.review.aok-relative.cr-desktop-review-page-0:nth-child(2) div.a-section.celwidget div.a-row.a-spacing-small.review-data span.a-size-base.review-text div.a-expander-collapsed-height.a-row.a-expander-container.a-expander-partial-collapse-container div.a-expander-content.reviewText.review-text-content.a-expander-partial-collapse-content > span').text())
        data.reviews.push($('div.a-section.review.aok-relative.cr-desktop-review-page-0:nth-child(3) div.a-section.celwidget div.a-row.a-spacing-small.review-data span.a-size-base.review-text div.a-expander-collapsed-height.a-row.a-expander-container.a-expander-partial-collapse-container div.a-expander-content.reviewText.review-text-content.a-expander-partial-collapse-content > span').text())
        data.reviews.push($('div.a-section.review.aok-relative.cr-desktop-review-page-0:nth-child(4) div.a-section.celwidget div.a-row.a-spacing-small.review-data span.a-size-base.review-text div.a-expander-collapsed-height.a-row.a-expander-container.a-expander-partial-collapse-container div.a-expander-content.reviewText.review-text-content.a-expander-partial-collapse-content > span').text())

        data.link = 'https://amazon.ae/dp/' + asin
        data.price = parseFloat($('div.a-section.a-spacing-none.aok-align-center > span > span.a-offscreen').text().split('AED')[1])


    } else{
            data.image = $('div > div > ul > li:nth-child(1) > span > div > img').attr('src')
            data.title = $('#titleblock_feature_div > div > h1 > span').text().trim()

            data.reviews.push($('#cm-cr-dp-review-list > div:nth-child(1) > div div.a-expander-content.reviewText.review-text-content.a-expander-partial-collapse-content span').text())
            data.reviews.push($('#cm-cr-dp-review-list > div:nth-child(2) > div div.a-expander-content.reviewText.review-text-content.a-expander-partial-collapse-content span').text())
            data.reviews.push($('#cm-cr-dp-review-list > div:nth-child(3) > div div.a-expander-content.reviewText.review-text-content.a-expander-partial-collapse-content span').text())
            data.reviews.push($('#cm-cr-dp-review-list > div:nth-child(4) > div div.a-expander-content.reviewText.review-text-content.a-expander-partial-collapse-content span').text())

            data.link = 'https://amazon.com/dp/' + asin
            data.price = $('div#exports_desktop_undeliverable_buybox_priceInsideBuybox_feature_div > div > span#price_inside_buybox').text()

        }


        return data;
};

module.exports = keyWordAnalysis