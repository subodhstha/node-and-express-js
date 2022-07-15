const express = require("express")
const app = express()
const path = require("path");

// setup static and middleware
app.use(express.static("2-express-tutorial/public"))

// app.get("/",(req,res)=>{
//     res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"))
// adding to static assets
// SSR
// })
app.get("*",(req,res)=>{
    res.status(404).send("resources not found")
})

app.listen(5000, ()=>{
    console.log("server is listening");
})