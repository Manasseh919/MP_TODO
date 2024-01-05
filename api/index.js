const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const crypto = require("crypto")


const app = express()
const port = 3000
const cors = require("cors")
app.use(cors())

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


mongoose.connect("mongodb+srv://manasseh919:seyrammann@cluster0.sqmuurg.mongodb.net/").then(()=>{
    console.log(`Connected to mongoDB ${mongoose.connection.host}`)
}).catch((error)=>{
    console.log("error connecting to mongo DB")
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})