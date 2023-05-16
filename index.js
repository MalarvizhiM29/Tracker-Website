const express = require("express")
const https = require("https")

const app = express()

app.get("/",(req,res)=>{
    https.get()
    res.send("Server Running")
})

app.listen(3000,function(){
    console.log("Server running at port 3000")
})