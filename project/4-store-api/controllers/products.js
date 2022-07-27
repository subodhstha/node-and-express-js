const Product = require("../models/products")

const getAllProductsStatic = async (req,res)=>{
    const products = await Product.find({}).sort("-name price")
    res.status(200).json({products, nbHits: products.length})
    // throw new Error("Testing async error")
    // res.status(200).json({msg:"Products testing route"})
}

const getAllProducts = async (req, res) =>{
    const {featured,company, name, sort} = req.query
    const queryObject = {}
    if(featured){
        queryObject.featured === "true" ? true : false
    }
    if(company){
        queryObject.company = company
    }
    if (name) {
        queryObject.name = {$regex: name, $options: "i"}
    }
    
    console.log(queryObject);
    const products = await Product.find(queryObject)
    res.status(200).json({products, nbHits: products.length})
    // res.status(200).json({msg:"products route"})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}