const UserModel = require('../models/user.model')
// const encrypt = require('mongoose-encryption')


// const secret = "thisisourlittlesecretforencryptionanddecryptioniguess"
// UserModel.plugin(encrypt, {secret: secret})
//render register page
module.exports.registerPage = (req,res) =>{
    res.render('register')
}
// save user info from the register page
module.exports.setUser = async(req,res) =>{
    
    const {username, password} = req.body

    if(!username || !password){
        res.status(400).json({
            error: "Cannot save data",
            message: "username or password is missing"
        })
    }

    //check if the email doesn't exist already
    UserModel.findOne({email: username})
            .then(data =>{
                //if email exist do this
                if(data && data.email === username){
                    res.status(400).json({
                        error: "Cannot save data",
                        message: "email already exists, you can go to login page" 
                    })
                }else{
                    //if email doesn't exist we create new data
                    UserModel.create({
                        email: username,
                        password: password
                    })
                    .then(result =>{
                
                        res.status(200)
                        console.log(result)
                        res.redirect('/login')
                
                    })
                    .catch(err =>{
                        res.status(400).json({
                            error: "error while saving data",
                            message: err
                        })
                    })
                }
            })

    
}