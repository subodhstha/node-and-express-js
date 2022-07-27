const errorHandlerMiddleware = async(err, req, res, next) =>{
    console.log(err);
    return res.status(500).json({msg:"Something went wrong, please try agin"})
}

module.exports = errorHandlerMiddleware