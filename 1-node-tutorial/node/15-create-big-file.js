const {outputFileSync} = require("fs-extra")
for(let i = 0; i < 1000; i++){
    outputFileSync("./content/big.txt", `hello world ${i}\n`,{flag: "a"})
}