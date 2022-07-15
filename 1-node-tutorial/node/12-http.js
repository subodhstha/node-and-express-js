const http = require("http");

const server = http.createServer((req,res)=>{
    console.log(req);
    if (req.url === "/") {
        res.end("welcome to our home page")
    }
    if (req.url === "/about") {
        res.end("here is our short history")
    }
    res.end(`<h1>OOps!</h1>
    <p>We cannot seem to find the page you are looking for</p>\
    
    <a href="/">back home</a>`)
    // res.write("Welcome to our home page")
    // res.end()
})
// localhost:5000
server.listen(5000)