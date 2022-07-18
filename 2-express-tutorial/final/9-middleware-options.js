const express = require("express")
const app = express()
const logger = require(".../logger")
const authorize = require("../authorize")
const morgan = require("morgan")
// req => middleware => res

// 1. user vs route
// 2. option - our own / express / third party

// app.use([logger, authorize])

// api/home/about/products
app.use(morgan("tiny"))
app.get("/",(req,res)=>{
    res.send("Home")
})
app.get("/about" ,(req,res)=>{
    res.send("About")
})
app.get("/api/products",(req,res)=>{
    res.send("Products")
})
app.get("/api/items",[logger, authorize] ,(req,res)=>{
    console.log(req.user);
    res.send("Items")
})
app.listen(5000,()=>{
    console.log("Server is listening on port 5000");
})