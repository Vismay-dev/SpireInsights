const router = require('express').Router()
const nodemailer = require('nodemailer')
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const amazonTop = require('../topProductAnalysis/amazon')
const amazonASIN = require('../scrapeASIN/amazon')
const amazonNew  = require('../deals/amazon')
const amazonBest = require('../bestSellers/amazon')
const amazonWished = require('../mostWished/amazon')
const amazonResults = require('../searchResultFinder/amazon')

const noon = require('../topProductAnalysis/noon')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const auth = require('../auth/auth')
const multer = require('multer')
const cloudinary = require('cloudinary')
const axios = require('axios')

const fileStorageEngine = multer.diskStorage({
    filename: function (req, file, callback) {
        callback(null, Date.now() + file.originalname)
    }
})
const upload = multer({ storage: fileStorageEngine })


router.post('/sendUserQuery',(req,res)=> {
    async function sendMail(){
    try {
      
//           


        const createTransporter = async () => {
            const oauth2Client = new OAuth2(
              process.env.CLIENT_ID,
              process.env.CLIENT_SECRET,
              process.env.OAUTHPLAYGROUND
            );
          
            oauth2Client.setCredentials({
              refresh_token: process.env.REFRESH_TOKEN,
              access_token: process.env.ACCESS_TOKEN,
              token_type: "bearer",
              expires_in: 3599,
              scope: "https://mail.google.com/"
            });

            const accessToken = await new Promise((resolve, reject) => {
                oauth2Client.getAccessToken((err, token) => {
                  if (err) {
                    reject("Failed to create access token :(");
                  }
                  resolve(token);
                });
              });

              const transporter = nodemailer.createTransport({
                service: "gmail",
                port:587,
                name: 'mail.google.com', // mail.example.com or smtp.mail.com
                host: 'mail.google.com', // mail.example.com or smtp.mail.com
                secure:true,
                auth: {
                  type: "OAuth2",
                  user: 'spireinsights1@gmail.com',
                  accessToken,
                  clientId: process.env.CLIENT_ID,
                  clientSecret: process.env.CLIENT_SECRET,
                  refreshToken: process.env.REFRESH_TOKEN,
                  expires_in: 3599 
                }
              });

              return transporter;
          };

         
        const transport = await createTransporter()

          
    
        const mailOptions = {
            from:'Spire Insights <spireinsights1@gmail.com>',
            to: [req.body.mailId],
            bcc:['vismaysuramwar@gmail.com','hunarmiglani@gmail.com','kathaneaditya@gmail.com'],
            subject:'Contacting Spire Insights',
            text:`
            Dear ${req.body.name},
    
            Your message on behalf of ${req.body.businessName} has been noted.

            Thank you for showing interest in our e-commerce services. Before we go any further, we'd like to give you a quick overview of our organization and the services we provide.

We are students at a formerly MIT-backed entrepreneurship program - LaunchX, and are currently on a mission to help more businesses access the E-commerce front, you needn’t stay on hold for hours anymore with amazon! We’re a call away to make the pain go away!

Our product has been launched for a free trial, spanning 2 days from the setting up of your profile, with a special 20% discount for the first 50 businesses that join us with a three month package. 

Our 3-month package is priced at $47.99 after a 20% discount on our original price of $59.99. 

We are also offering a monthly package worth $19.99. 

The following are the list of product management services we provide:

Set up -

- E-commerce store setup on marketplaces on Amazon.
- Unique and keywords optimized Product title, short description, long description & attributes.

Management - 

- Enhanced Product visibility, SEO/SEM services.
- Partial automation of online store management.
- Amazon Storefront Design & Development.

Optimization - 

- Average Competitive Rating & Pricing.
- High Performing Keywords for listing enhancement.
- 6 Top Products with Title, Description, Image, Rating, Price, Link to Product Page, Link to Reviews Page.
- Market Analysis 
- No. of SERPs (Search Result Pages) in which the product appeared
- No. of SERPs (Search Result Pages) in which the product ranked 1, 2-3, 4-10 and 11-100
- 4-5 Consumer Reviews for the Product IDs entered.

Though our offering is completely hands-free and online we do offer free consultancy zoom sessions and an active call center in case you require any guidance around our website or have general questions regarding our services. 

Looking forward to a positive reply from your end and getting started on your journey to enhanced growth. 

Reply to this email or contact us at - +971 58 581 2510 - to be added to our list of customers for the free trial. Keep in mind the slots are filling up quickly! 

Explore our website at - spire-insights.herokuapp.com
Instagram - @spireinsights
Facebook - Spire Insights

Your Message: '${req.body.message}'
            
            We'll get back to you as soon as possible!
            
            Thank you,
            Regards,
            The Spire Insights Team`,
            html: `
            <p>Dear ${req.body.name},</p>
    
            <p>Your message on behalf of ${req.body.businessName} has been noted.<br/>

            <h4>Thank you for showing interest in our e-commerce services.<br/> Before we go any further, we'd like to give you a quick overview of our organization and the services we provide.<br/><br/>

We are students at a formerly MIT-backed entrepreneurship program - LaunchX, and are currently on a mission to help more businesses access the E-commerce front, you needn’t stay on hold for hours anymore with amazon! We’re a call away to make the pain go away!<br/><br/>

Our product has been launched for a free trial, spanning 2 days from the setting up of your profile, with a special 20% discount for the first 50 businesses that join us with a three month package. <br/><br/>

Our 3-month package is priced at $47.99 after a 20% discount on our original price of $59.99. <br/><br/>

We are also offering a monthly package worth $19.99. <br/><br/>

The following are the list of product management services we provide:<br/><br/>

Set up -<br/>

- E-commerce store setup on marketplaces on Amazon.<br/>
- Unique and keywords optimized Product title, short description, long description & attributes.<br/>
<br/>
Management - <br/>
<br/>
- Enhanced Product visibility, SEO/SEM services.<br/>
- Partial automation of online store management.<br/>
- Amazon Storefront Design & Development.<br/>
<br/>
Optimization - <br/>
<br/>
- Average Competitive Rating & Pricing.<br/>
- High Performing Keywords for listing enhancement.<br/>
- 6 Top Products with Title, Description, Image, Rating, Price, Link to Product Page, Link to Reviews Page.<br/>
- Market Analysis <br/>
- No. of SERPs (Search Result Pages) in which the product appeared<br/>
- No. of SERPs (Search Result Pages) in which the product ranked 1, 2-3, 4-10 and 11-100<br/>
- 4-5 Consumer Reviews for the Product IDs entered.<br/><br/>

Though our offering is completely hands-free and online we do offer free consultancy zoom sessions and an active call center in case you require any guidance around our website or have general questions regarding our services.</h4>

Looking forward to a positive reply from your end and getting started on your journey to enhanced growth.<br/><br/>

Reply to this email or contact us at - +971 58 581 2510 - to be added to our list of customers for the free trial. Keep in mind the slots are filling up quickly! <br/><br/>
<i>
Explore our website at - spire-insights.herokuapp.com<br/>
Instagram - @spireinsights<br/>
Facebook - Spire Insights<br/></i><br/>

Your Message: '${req.body.message}'<br/><br/>
            
            We'll get back to you as soon as possible!</p>
            
            <p>Thank you,<br/>
            Regards,<br/>
            The Spire Insights Team</p>`,
            attachments:[
                {
                  fileName: 'Spire.jpg',
                  path: 'server/routes/Spire.jpg',
                  cid: 'spireinsights@orgae.ee'
                }
              ]
        }
        const result = await transport.sendMail(mailOptions)
        return result
    }catch (err) {
        return(err)
    }
    } 

    sendMail().then(result=> {
        res.send('Successfully sent Email !')
        console.log(result)
    }).catch(err=> {
        console.log(err)
        res.status(400).send(err)
    })
    
})


router.post('/mostWished',auth,(req,res)=> {
    console.log('\nPlatform: ' + req.body.platform)

    if(req.body.platform==='Amazon'){
        amazonWished('ae').then(analysis=> {
            res.send(analysis)
        })
    }else if(req.body.platform ==='Noon') {
        // noon(req.body.sentence,'uae-en')
        // res.send({})
    }

})

router.post('/bestSellers',auth,(req,res)=> {
    console.log('\nPlatform: ' + req.body.platform)

    if(req.body.platform==='Amazon'){
        amazonBest('ae').then(analysis=> {
            res.send(analysis)
        })
    }else if(req.body.platform ==='Noon') {
        // noon(req.body.sentence,'uae-en')
        // res.send({})
    }

})

router.post('/newProductEntries',auth,(req,res)=> {
    console.log('\nPlatform: ' + req.body.platform)

    if(req.body.platform==='Amazon'){
        amazonNew('ae').then(analysis=> {
            res.send(analysis)
        })
    }else if(req.body.platform ==='Noon') {
        // noon(req.body.sentence,'uae-en')
        // res.send({})
    }

})

router.post('/topProductAnalysis',auth,(req,res)=> {
    console.log('\nPlatform: ' + req.body.platform)
    if(req.body.platform==='Amazon'){
        amazonTop(req.body.sentence.toLowerCase(),'ae').then(analysis=> {
            res.send(analysis)
        })
    }else if(req.body.platform ==='Noon') {
        noon(req.body.sentence,'uae-en')
        res.send({})
    }
})

router.post('/marketPlaceOverview',auth, async(req,res)=> {
try{
    console.log('\nPlatform: ' + req.body.platform)
    if(req.body.platform==='Amazon'){
 let post_array = [

        ];
post_array.push({
  "keywords": req.body.sentence.toLowerCase().split(' '),
  "language_name": "English",
  "location_code": 2840
});
let searchVolumeData = []

await axios({
  method: 'post',
  url: 'https://api.dataforseo.com/v3/dataforseo_labs/amazon/bulk_search_volume/live',
  auth: {
    username: process.env.EMAIL ,
    password:  process.env.seoPASS
  },
  data: post_array,
  headers: {
    'content-type': 'application/json'
  }
}).then(async(response) => {
  var result = response['data']['tasks'];
  if(!result || !result[0].result){
    res.status(400).send('Unable to scrape')
  }
  console.log(result)
  for(let x = 0; x<result[0].result.length; x++){
    for(let y = 0; y< result[0].result[x].items.length; y++ ){

        searchVolumeData.push({
            keyWord: result[0].result[x].items[y].keyword,
            searchVolume : result[0].result[x].items[y].search_volume
        })

    }
  }

  for(let y = 0; y< searchVolumeData.length; y++ ){    
    await amazonResults(searchVolumeData[y].keyWord,'ae').then(res=> {
        searchVolumeData[y] = {
            ...searchVolumeData[y],
            searchResults: res
        }
    })
}


let post_array2 = [];
post_array2.push({
  "keyword": req.body.sentence,
  "language_name": "English",
  "location_code": 2840,
  "limit": 3,
  "include_seed_keyword": false
});

let relatedKeyWordData = []

await axios({
    method: 'post',
    url: 'https://api.dataforseo.com/v3/dataforseo_labs/amazon/related_keywords/live',
    auth: {
        username: process.env.EMAIL ,
        password:  process.env.seoPASS
    },
    data: post_array2,
    headers: {
      'content-type': 'application/json'
    }
  }).then(async (response) => {
    var result = response['data']['tasks'];
    if(!result){
        res.status(400).send('Unable to scrape')
      }
    for(let x = 0; x<result[0].result.length; x++){
        for(let y = 0; y< result[0].result[x].items.length; y++ ){
                if(result[0].result[x].items[y].keyword_data.keyword!==req.body.sentence){
                    relatedKeyWordData.push({
                        keyWordSentence: result[0].result[x].items[y].keyword_data.keyword,
                        searchVolume : parseInt(result[0].result[x].items[y].keyword_data.keyword_info.search_volume)
                    })
                }
        } 
      }


      for(let y = 0; y< relatedKeyWordData.length; y++ ){    
        await amazonResults(relatedKeyWordData[y].keyWordSentence,'ae').then(res=> {
            relatedKeyWordData[y] = {
                ...relatedKeyWordData[y],
                searchResults: res
            }
        })
    }


    res.send({
        searchVolumeData: searchVolumeData,
        relatedKeyWordData: relatedKeyWordData
    })

  }).catch(function (error) {
    console.log(error);
    res.status(400).send(error.response)
  });



}).catch(function (error) {
  console.log(error);
});




    }else if(req.body.platform ==='Noon') {
        
    }


}catch(err){
    res.status(400).send(err.response.data)
}
})

router.post('/trackProductPerformance',auth, async(req,res)=> {
    try{
        console.log('\nPlatform: ' + req.body.platform)
if(req.body.platform==='Amazon'){

    let productAnalysis = {}

    let competitorData = []

    post_array = [];
    
    post_array.push({
    "asin": req.body.asin,
    "language_name": "English",
    "location_code": 2840,
    'limit': 6
    });

await axios({
  method: 'post',
  url: 'https://api.dataforseo.com/v3/dataforseo_labs/amazon/product_competitors/live',
  auth: {
    username: process.env.EMAIL ,
    password:  process.env.seoPASS
  },
  data: post_array,
  headers: {
    'content-type': 'application/json'
  }
}).then(async(response) => {
    if(!response['data']['tasks'][0]||!response['data']['tasks'][0]['result']||!response['data']['tasks'][0]['result'][0].items){
        console.log(response['data']['tasks'][0])
        res.status(402).send('Unable to scrape')
      }
if(response['data']['tasks'][0]['result'][0].items){
  var result = response['data']['tasks'][0]['result'][0].items
  if(result){
  for(let i = 0; i < result.length;i++) {
     let scrapeData = await amazonASIN(result[i].asin,'ae')
    if(i===0){
        productAnalysis.ASIN = result[0].asin,
        productAnalysis.totalSearchVolume = result[0].competitor_metrics.amazon_serp.search_volume + result[0].competitor_metrics.amazon_paid.search_volume
        productAnalysis.pos_1 =  result[0].competitor_metrics.amazon_serp.pos_1 + result[0].competitor_metrics.amazon_paid.pos_1
        productAnalysis.pos_2_3 = result[0].competitor_metrics.amazon_serp.pos_2_3 + result[0].competitor_metrics.amazon_paid.pos_2_3
        productAnalysis.pos_4_10 = result[0].competitor_metrics.amazon_serp.pos_4_10 + result[0].competitor_metrics.amazon_paid.pos_4_10 
        productAnalysis.pos_11_100 = result[0].competitor_metrics.amazon_serp.pos_11_100 + result[0].competitor_metrics.amazon_paid.pos_11_100
        productAnalysis.count = result[0].competitor_metrics.amazon_serp.count + result[0].competitor_metrics.amazon_paid.count
        productAnalysis = {...productAnalysis,
        ...scrapeData}
    }else {
    competitorData.push({
        ASIN: result[i].asin,
        totalSearchVolume : result[i].competitor_metrics.amazon_serp.search_volume + result[i].competitor_metrics.amazon_paid.search_volume,
        pos_1 :result[i].competitor_metrics.amazon_serp.pos_1 + result[i].competitor_metrics.amazon_paid.pos_1,
        pos_2_3 : result[i].competitor_metrics.amazon_serp.pos_2_3 + result[i].competitor_metrics.amazon_paid.pos_2_3,
        pos_4_10 : result[i].competitor_metrics.amazon_serp.pos_4_10 + result[i].competitor_metrics.amazon_paid.pos_4_10 ,
        pos_11_100 : result[i].competitor_metrics.amazon_serp.pos_11_100 + result[i].competitor_metrics.amazon_paid.pos_11_100,
        count : result[i].competitor_metrics.amazon_serp.count + result[i].competitor_metrics.amazon_paid.count,
        ...scrapeData
    })
    }
  }
}else {
    res.status(402).send('Unable to scrape')
}
}

res.send({
    productAnalysis,
    competitorData
})

}).catch(function (error) {
  console.log(error);
  res.status(400).send(error.response)
});

    }else if(req.body.platform ==='Noon') {
        
    }

}catch(err){
    res.status(400).send(err.response)
}
})

router.post('/register', async(req,res)=> {
    console.log(req.body)
    try {
        let hash = await bcrypt.hash(req.body.password.trim(), 10)
        let existingUser = await User.findOne({email: req.body.email.trim()})
        if(existingUser) {
            res.status(400).send('This Email ID has already been registered.')
        } else {
            const newUser = new User({
                repFirstName: req.body.repFirstName,
                repLastName: req.body.repLastName,
                email: req.body.email.toLowerCase().trim(),
                password: hash,
                businessName: req.body.businessName,
                country: req.body.country,
                city: req.body.city,
                paid: false,
                subscription: 'none',
                pipeline:{
                    current:'preparation',
                    data: {
                        storeDetails:{
                            platform: '',
                            productName: '',
                            productDetails: '',
                            beingEdited:false,
                            isSaved:false
                         },
                         pricing: {
                            productPricing: 0,
                            currency: 'AED',
                            beingEdited:false,
                            isSaved:false
                   
                         },
                         shipping: {
                            productDimension: '',
                            productWeight: 0,
                            beingEdited:false,
                            isSaved:false
                         },
                         images: {
                            collection:[],
                            beingEdited:false,
                            isSaved:false
                         },
                         keyWords: {
                            one: '',
                            two: '',
                            three: '',
                            four: '',
                            five: ''
                         },
                         prepBeingEdited:false,
                         keyWordsBeingEdited:false
                        }
                }
                        })
            const user = await newUser.save()
            const token = jwt.sign({_id:user._id}, 
                process.env.TOKEN_SECRET,
                {expiresIn:'2.5h'});
             console.log('- Logged In')
             res.send({user:user, userToken: token}) 
        }
    }catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
})

router.post('/login', async(req,res)=> {
    try {
        const user = await User.findOne({email:req.body.email.toLowerCase().trim()})
        if(!user) {
            console.log('- User not found')
            res.status(401) .send('User not found')
        }else {
            const isMatch = await bcrypt.compare(req.body.password.trim(), user.password)
            if(!isMatch) {
                console.log('- Incorrect password')
                res.status(401).send('Incorrect password')
            }else {

                if(user.paid===false&&Math.abs((new Date()) - new Date(user.createdAt)) / (36*Math.pow(10,5))>48){
                    console.log('- Free Trial Expired')
                    res.status(401).send('Free Trial Expired.')
                }
                else{ 
                const token = jwt.sign({_id:user._id}, 
                    process.env.TOKEN_SECRET,
                    {expiresIn:'2.5h'});

                    const token2 = jwt.sign({_id:user._id}, 

                    process.env.TOKEN_SECRET,
                        {expiresIn:'14d'});
                console.log('- Logged In')
                 res.send({user:user, userToken: token})

                // if(!req.body.rememberme){
                //     let cookieNow = req.session.cookie
                // cookieNow.path = 'www.ideastack.org/home'
                // cookieNow.id = token2
                // cookieNow.expires = new Date(Date.now() + 900000)
                // req.session.isAuth = true
                // res.send({user:user, userToken: token, cookieObj:{...cookieNow,
                //     id:token2,
                //     expires: new Date(Date.now() + 900000)    
                // }})
                // }else {
                // }
            }
        } }
    }catch (err) {
        console.log(err)
    }
})

router.post('/getUser',auth,async(req,res)=> {
    try {
        const user = await User.findById(req.user._id)
        res.send(user)
    }catch (err) {
        res.status(400).send(err)
    }
})

router.post('/updateUser',auth, async(req,res)=> {
    try {
        const userPrev = await User.findById(req.user._id)
        updateInfo = {...req.body.user, password: userPrev.password}
        console.log(updateInfo)
        const newUser = await User.findByIdAndUpdate(req.user._id, updateInfo)
        const updatedUser = await newUser.save()
        res.send(updateInfo)
    }catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
}
)

router.post('/saveCurrentPipelinePrep', auth, async(req,res)=> {
    try{
    const user = await User.findById(req.user._id)
    let details = req.body.details
    let detailObj = details
    let chk = true

    console.log(detailObj)

    for(let x = 0;x<Object.values(detailObj).length;x++){
        let subObj = Object.values(detailObj)[x];
        for(let y = 0; y<Object.values(subObj).length;y++){
            if(!['one','two','three','four','five','beingEdited'].includes(Object.keys(subObj)[y])){
            if(Object.values(subObj)[y]===null||Object.values(subObj)[y]===false||Object.values(subObj)[y]===''||Object.values(subObj)[y]===[]){
                chk = false;
                break;
            }
        }
        }
        if(chk ==false){
            break;
        }
    }

    
    let currPipeline = user.pipeline;
    currPipeline = {...currPipeline, data:detailObj}

    if(currPipeline.current !== 'preparation' && chk){
        let newData = {pipeline:{...currPipeline, prepBeingEdited:false}}
        let newUser = await User.findByIdAndUpdate(req.user._id , newData)
        currPipeline = {...currPipeline, prepBeingEdited:false}
     }else if(chk){
        currPipeline.current = 'seo'
        let newUser = user;
        newUser.pipeline = currPipeline
        newUser = await User.findByIdAndUpdate(req.user._id , newUser)
    }

       res.send(currPipeline)

}catch(err){
    console.log(err)
    res.status(400).send(err)
}
})

router.post('/saveCurrentPipelineKeyWords', auth, async(req,res)=> {
    try{
    let user = await User.findById(req.user._id)
    let details = req.body.details
    let detailObj = details

    let chk = true
    for(let x = 0;x<Object.values(detailObj).length;x++){
        let subObj = Object.values(detailObj)[x];
        for(let y = 0; y<Object.values(subObj).length;y++){
            if(['one','two','three','four','five'].includes(Object.keys(subObj)[y])){
            if(Object.values(subObj)[y]===null||Object.values(subObj)[y]===false||Object.values(subObj)[y]===''||Object.values(subObj)[y]===[]){
                chk = false;
                break;
            }
        }
        }
        if(chk ==false){
            break;
        }
    }

    let currPipeline = user.pipeline;
    currPipeline = {...currPipeline, data:detailObj}

    if(currPipeline.current !== 'seo' && chk){
        let newData = {pipeline:{...currPipeline, keyWordsBeingEdited:false}}
         let newUser = await User.findByIdAndUpdate(req.user._id , newData)
         currPipeline = {...currPipeline, keyWordsBeingEdited:false}
     }else if(chk){
        currPipeline.current = 'completed'
        let newUser = user;
        newUser.pipeline = currPipeline   
        newUser = await User.findByIdAndUpdate(req.user._id , newUser)
    }

    res.send(currPipeline)

}catch(err){
    console.log(err)
    res.status(400).send(err)
}
})

router.post('/saveCurrentPipeline', auth, async(req,res)=> {
    try{
    const user = await User.findById(req.user._id)
    let pipeNewLine  = req.body.pipeline
    let newUser = await User.findByIdAndUpdate(req.user._id , {pipeline:{...user.pipeline,...pipeNewLine}})
    res.send(newUser)
}catch(err){
    console.log(err)
    res.status(400).send(err)
}
})

router.post('/uploadPic',upload.single('image'),async(req,res)=> {
    const decoded = jwt.verify(req.body.token, process.env.TOKEN_SECRET);
    let id = decoded._id;
    
    let file = req.file;
    var fileUrl;
    await cloudinary.v2.uploader.upload(file.path, 
        { folder: "Spire Insights" },
     (err, result) => {
        fileUrl = result.secure_url           
        console.log('File Uploaded')
    }).catch(err=> console.log(err.response))
   
    res.send(fileUrl);
})

router.post('/uploadProfPic',upload.single('image'),async(req,res)=> {
    const decoded = jwt.verify(req.body.token, process.env.TOKEN_SECRET);
    let id = decoded._id;
    const user = await User.findOne({userId:id})
    let file = req.file;
    var fileUrl;
    await cloudinary.v2.uploader.upload(file.path, 
        { folder: "IdeaStack" },
     (err, result) => {
        fileUrl = result.secure_url           
        console.log('File Uploaded')
    }).catch(err=> console.log(err.response))

    console.log(fileUrl)
        let userUpdated = await User.findOneAndUpdate({_id:id}, {profilePic : fileUrl}).catch(err=> console.log(err))
    res.send(fileUrl);
})


module.exports = router
