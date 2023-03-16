const express = require('express')
const { homePage } = require('../controllers/home.controller')
const { loginPage, dataChecking } = require('../controllers/login.controllers')
const { registerPage, setUser } = require('../controllers/register.controllers')
const { secretsPage } = require('../controllers/secrets.controller')
const { submitPage} = require('../controllers/submit.controllers')

const router = express.Router()

router.get('/', homePage)

//login routes
router.get('/login', loginPage)

router.post('/login', dataChecking)

//register routes
router.get('/register', registerPage)
router.post('/register', setUser)

// //secrets route
// router.get('/secrets', secretsPage)

//submit routes

router.get('/submit',submitPage)
router.post('/submit', (req,res) =>{
    
})



module.exports = router