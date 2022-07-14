var http = require("http")
var fs = require("fs-extra")
const { conformsTo } = require("lodash")

http.createServer(function(req, res){
    // const text = fs.readFileSync("./content/first.txt", "utf8")
    // res.end(text)
    const fileStream = fs.createReadStream("./content/first.txt","utf8")
    fileStream.on("open",()=>{
        fileStream.pipe(res)
    })
    fileStream.on("error",(err)=>{
        res.end(err)
    })
})
.listen(5000)