const {createReadStream} = require("fs");

const stream = createReadStream("./content/first.txt")

stream.removeAllListeners("data",(result) =>{
    console.log(result);
})