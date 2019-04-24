const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const PORT = 4000
const mongoose = require("mongoose")
const {studentRegistrationData , studentResumesData } = require("./Schema")
const Routes = express.Router()

app.use(cors())
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/Recruitment", { useNewUrlParser: true })
const connection = mongoose.connection
connection.once("open", () => {
    console.log("connection has been established")
})

Routes.route("/Signup").post(async (req, res) => {
    try {
        console.log(req.body);
        let RegistrationForm = new studentRegistrationData(req.body)
        let savedBody = await RegistrationForm.save()
        res.send(savedBody);
         
    } catch (err) {
        res.send(err);
    }
})

Routes.route("/Resume").post(async (req, res) => {
    try {
        console.log(req.body);
        let ResumesData = new studentResumesData(req.body)
        let savedBody = await ResumesData.save()
        res.send(savedBody);
         
    } catch (err) {
        res.send(err);
    }
})


app.use("/", Routes)
app.listen(PORT, () => {
    console.log("server is running on PORT", PORT)
})


