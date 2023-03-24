const express = require('express')
const dotenv = require('dotenv')
dotenv.config({path:'./config/config.env'})
const colors = require('colors')
const morgan = require('morgan')
const connectDB = require('./config/db')


connectDB();
const app = express()
app.use(express.json())

const port = process.env.PORT || 5000;
app.get('/',(req,res)=>{
    res.send('hello world')
})

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}


app.listen(port, () => console.log(`Example app listening on port ${port} at ${process.env.NODE_ENV}!`))