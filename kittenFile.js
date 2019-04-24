const mongoose = require("mongoose")
const Kitten = require("./Schema")
mongoose.connect("mongodb://localhost:27017/Kitten",{ useNewUrlParser: true })
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once("open" , () => {
    console.log("connection has been successfully established")
})

var silence = new Kitten({ name: 'bony' , type:"fluffy" });
console.log(silence.name);
console.log(silence.type);
silence.save((error) => {
    if (error){
    console.log("eror")
    }
    console.log("your data has been added to the dataBase")
})