const express = require("express")
const app = express()

app.get("/hello",(req,res)=>{
    res.send("Task Manger App")
})


const port = 3000

app.listen(port,console.log(`Server is listening on port ${port}`))