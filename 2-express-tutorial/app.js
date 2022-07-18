const express = require("express")
const app = express()
let {people} = require("./data.js")

// static assets
app.use(express.static("2-express-tutorial/methods-public"))

app.get("/api/people",(req,res)=>{
    res.status(200).json({success:true,data:people})
})
app.listen(5000, ()=>{
    console.log(("Server is listening on port 5000"));
})