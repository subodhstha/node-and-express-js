const express = require("express")
const app = express()
const {products} = require("../data")

app.get("/",(req,res) =>{
    res.send('<h1>Home Page</h1> <a href="/api/products">products</a>')
})
app.get("/api/products",(req,res)=>{
    const newProducts = products.map((products)=>{
        const {id,name,image} = products;
        return {id,name,image}
    })
    res.json(newProducts)
})

app.listen(5000, () => {
    console.log("server is listening on the port 5000");
})