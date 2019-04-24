const mongoose = require("mongoose")
const schema = mongoose.Schema

var studentRegistrationData = new schema({
    firstName:String,
    lastName:String,
    Email:String,
    Password:String,
}) 

var studentResumesData = new schema({
    name:String,
    tagLine:String,
    experience:{},
    Eductaion:{},
    skills:[],
    Awards:{},
}) 


var studentRegistrationData = mongoose.model("StudentRegistration" , studentRegistrationData)
var studentResumesData = mongoose.model("StudentResumesData",studentResumesData)
module.exports = {
 studentRegistrationData,
 studentResumesData,
}