const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlenght:[50,'the maximum length for the title is 50 character']
    },
    description: {
        type: String,
        trim: true,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
       },
    image:{
        type:String,
        default:no-img.jpg

       },
       posts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Posts'
      }]
})


module.exports = mongoose.model('User',UserSchema)