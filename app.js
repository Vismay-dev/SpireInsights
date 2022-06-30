const express        = require('express')
const app            = express()
const dotenv         = require('dotenv')
const { http, https } = require('follow-redirects');
const cors           = require('cors')
const mongoose = require('mongoose')

const RoutesAPIUser = require('./server/routes/RoutesAPIUser.js')

dotenv.config()
app.use(express.json())

mongoose.connect(process.env.MONGODB,{useUnifiedTopology:true,useNewUrlParser:true },
    ).then(()=> {
          console.log('- Connected to Spire Database...')
      }).catch(err=> console.log(err))

mongoose.connection.on('error', function (err) { console.log(err) });


app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
    // :'http://localhost:3000'
    // 'https://www.ideastack.org'

}))

app.use('/api/user',RoutesAPIUser)

const port = process.env.PORT||4000;

app.listen(port,()=> {
    console.log(`- Successfully connected to server at port ${port}`)
})