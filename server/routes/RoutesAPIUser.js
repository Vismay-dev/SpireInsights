const router = require('express').Router()
const amazon = require('../topProductAnalysis/amazon')
const amazonASIN = require('../scrapeASIN/amazon')
const noon = require('../topProductAnalysis/noon')
const amazonResults = require('../searchResultFinder/amazon')
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


router.post('/topProductAnalysis',auth,(req,res)=> {
    console.log('\nPlatform: ' + req.body.platform)
    if(req.body.platform==='Amazon'){
        amazon(req.body.sentence.toLowerCase(),'ae').then(analysis=> {
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
}).then(function (response) {
  var result = response['data']['tasks'];
  for(let x = 0; x<result[0].result.length; x++){
    for(let y = 0; y< result[0].result[x].items.length; y++ ){

        searchVolumeData.push({
            keyWord: result[0].result[x].items[y].keyword,
            searchVolume : result[0].result[x].items[y].search_volume
        })

    }
  }
}).catch(function (error) {
  console.log(error);
});

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


    }else if(req.body.platform ==='Noon') {
        
    }


}catch(err){
    res.status(400).send(err.response.data)
}
})

router.post('/trackProductPerformance',auth, async(req,res)=> {
    console.log('\nPlatform: ' + req.body.platform)
    try{
    if(req.body.platform==='Amazon'){

let productAnalysis = {

}

let competitorData = [

]

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
if(response['data']['tasks'][0]['result'][0].items){
  var result = response['data']['tasks'][0]['result'][0].items
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
  
}

res.send({
    productAnalysis,
    competitorData
})

}).catch(function (error) {
  console.log(error);
  res.status(400).send(error.response.data)
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
                            currency: '',
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
                if(Math.abs((new Date()) - new Date(user.createdAt)) / (36*Math.pow(10,5))>48){
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
        res.send(updatedUser)
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
    user.pipeline.data = details
    let newUser = await User.findByIdAndUpdate(req.user._id , user)
    let detailObj = newUser.pipeline.data
    let chk = true

    for(let x = 0;x<Object.values(detailObj).length;x++){
        let subObj = Object.values(detailObj)[x];
        for(let y = 0; y<Object.values(subObj).length;y++){
            if(!['one','two','three','four','five','beingEdited'].includes(Object.keys(subObj)[y])){
            if(Object.values(subObj)[y]===null||Object.values(subObj)[y]===false||Object.values(subObj)[y]===''||Object.values(subObj)[y]===[]){
                chk = false;
                console.log(Object.values(subObj)[y]===[])
                console.log(Object.keys(subObj)[y])
                console.log(Object.values(subObj)[y])
                break;
            }
        }
        }
        if(chk ==false){
            break;
        }
    }

    
    let currPipeline = user.pipeline;

    if(currPipeline.current !== 'preparation' && chk){
        let newData = {pipeline:{...currPipeline, prepBeingEdited:false}}
         newUser = await User.findByIdAndUpdate(req.user._id , newData)
     }else if(chk){
        currPipeline.current = 'seo'
        newUser.pipeline = currPipeline
        console.log(newUser)
        newUser = await User.findByIdAndUpdate(req.user._id , newUser)
    }

   

    res.send(newUser)

}catch(err){
    console.log(err)
    res.status(400).send(err)
}
})

router.post('/saveCurrentPipelineKeyWords', auth, async(req,res)=> {
    try{
    let user = await User.findById(req.user._id)
    let details = req.body.details
    user.pipeline.data = details
    let newUser = await User.findByIdAndUpdate(req.user._id , user)
    let detailObj = user.pipeline.data
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
    // console.log(currPipeline.data.keyWords)

    if(currPipeline.current !== 'seo' && chk){
        let newData = {pipeline:{...currPipeline, keyWordsBeingEdited:false}}
         newUser = await User.findByIdAndUpdate(req.user._id , newData)
         res.send(newUser)
     }else if(chk){
        currPipeline.current = 'completed'
        newUser.pipeline = currPipeline
        console.log(newUser.pipeline)
        newUser = await User.findByIdAndUpdate(req.user._id , newUser)
        res.send(newUser)
    }

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
    // console.log(newUser)
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
    res.send(userUpdated);
})


module.exports = router
