const authorize = (req, res, next) =>{
    const {user} = req.query
    if(user === "suzan"){
        req.user = {name:"suzan",id:"5"}
        next()
    }
    else{
        res.status(401).send("Unauthorized")
    }
}

module.exports = authorize