const UserModel = require("../models/user.model")


module.exports.loginPage = (req,res) =>{
    res.render('login')
}

module.exports.dataChecking = async(req,res) =>{
    const {username, password} = req.body

    if(!username || !password){
        res.status(400).json({
            error: "Cannot check data",
            message: "email or password is missing"
        })
    }

    UserModel.findOne({
        email: username,
    })
    .then(result =>{

        if(result && (result.email === username && result.password === password)){
            res.status(200)
            res.render('secrets')
        }else{
            res.status(400).json({
                error: "Data validation error ",
                message: "email or password is not matching"
            })
        }
        
    })
    .catch(err =>{
        res.status(400).json({
            error: "Data checking error",
            message: err
        })
    })
}