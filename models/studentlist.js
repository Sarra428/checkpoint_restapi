const mongoose = require('mongoose');

const studentlistSchema = mongoose.Schema({
    name:String,
    age:Number,
    email:{type:String, unique:true, required:true},
    schoolYear: Number,
})




module.exports = mongoose.model('studentlist', studentlistSchema)