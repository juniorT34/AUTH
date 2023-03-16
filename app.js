//jshint esversion:6

require('dotenv').config()
const express = require('express')
const path = require('path')
const ejs = require('ejs')
const { connectToDB } = require('./config/db')
const app = express()
const PORT = process.env.PORT || 3000

//connect mongo db
connectToDB()
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', require('./routes/allRoute.routes'))

app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`)
})
