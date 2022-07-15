const {readFileSync,outputFileSync} = require("fs-extra")

console.log("start")

const first = readFileSync("./content/first.txt", "utf8")
const second = readFileSync("./content/second.txt", "utf8")

outputFileSync(
    "./content/result-sync.txt", `Here is result : ${first}, ${second}`,
    {flag:"a"}
)
console.log("done");