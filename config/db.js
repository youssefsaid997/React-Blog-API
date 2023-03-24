require('colors')
const mongoose = require('mongoose')


const uri = process.env.MONGO_URI;
const connectDB = async ()=>{
   const connect = await mongoose.connect(uri,{
    useNewUrlParser: true, useUnifiedTopology: true
   })
   console.log('Connected To DataBase'.green)
}


module.exports = connectDB;