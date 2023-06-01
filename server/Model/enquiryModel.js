const mongoose = require("mongoose")


const enquirySchema = new mongoose.Schema({
     name:{
      type:String,
      required:true,
     },
     number:{
        type:String,
        required:true,
     },
     email:{
        type:String,
        required:true,
     },
     typeOfown:{
        type:String,
        required:true,
     },
     numberOfRooms:{
        type:String,
        required:true,
     },
     location:{
        type:String,
        required:true,
     },
     knowUs:{
        type:String,
        required:true,
     }
})

module.exports = mongoose.model("enquiry" , enquirySchema)

