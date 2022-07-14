const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    repFirstName: {
      type: String,
      required: true
    },
    repLastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    paid: {
      type: Boolean,
      required:true
    },
    subscription: {
      type: String,
      required:true
    },
    password:{
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    businessName: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    pipeline:{
      type: Object,
      required:true
    },
    profilePic: {
      type: String,
      required: false
    }
  }, { timestamps: true })

const User = mongoose.model('User', userSchema)
module.exports = User