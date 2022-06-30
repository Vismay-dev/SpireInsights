const router = require('express').Router()
const amazon = require('../topProductAnalysis/amazon')
const noon = require('../topProductAnalysis/noon')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

router.post('/topProductAnalysis',(req,res)=> {
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
                city: req.body.city
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

router.post('/login',   
  async(req,res)=> {
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
        }
    }catch (err) {
        console.log(err)
    }
})





module.exports = router
