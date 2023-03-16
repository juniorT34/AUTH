const mongoose = require('mongoose')

module.exports.connectToDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
                    .then(() =>{
                        console.log("mongo connected successfully")
                    })
    }catch(error){
        console.log(error)
    }
}
