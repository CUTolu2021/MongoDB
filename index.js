const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const authorRoute = require('./route/author.route')


const app = express()

const CONNECTION_URL = process.env.CONNECTION_URL


//Middleware
app.use(express.json())

mongoose.connect(CONNECTION_URL)
.then(()=>console.log("Connected To DB Successfully"))
.catch((err)=>console.log(err))
.finally(() => console.log("Finally we made it"))

const callBack = () => {
    console.log(`Port ${process.env.PORT} is active.`);
}
//Route
app.use('/authors',authorRoute)

app.use('*',(req, res) => {
    res.send('Not Found')
  })

app.listen(process.env.PORT,callBack)


