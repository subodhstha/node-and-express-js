const http = require("http")

const server = http.createServer((req, res) => {
    console.log("user hit server");
})

server.listen(5000)