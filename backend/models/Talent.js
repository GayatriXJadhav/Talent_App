const mongoose = require("mongoose");

const talentSchema=new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String,required:true, unique:true},
    skills:[{type:String}],
    experience:{type:Number},
},{timestamps:true});


module.exports = mongoose.model("Talent", talentSchema);