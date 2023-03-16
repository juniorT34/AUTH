const mongoose = require('mongoose')
const encrypt = require('mongoose-encryption')

const UserModel = mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
})

UserModel.plugin(encrypt, {secret: process.env.ENCRYPT_SECRET,encryptedFields: ["password"]})

module.exports = mongoose.model('User', UserModel)