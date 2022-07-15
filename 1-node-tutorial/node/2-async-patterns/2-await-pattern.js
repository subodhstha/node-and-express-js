const {readFile, outputFile} = require("fs-extra").promises
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const outputFilePromise = util.promisify(outputFile)


// const getText = (path) =>{
//     return new Promise((resolve, reject)=>{
//         readFile(path, "utf8", (err, data)=>{
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(data);
//             }
//         })
//     })
// }

// getText("../content/first.txt")
// .then((result) => console.log(result))
// .catch((err)=> console.log(err))

const start = async() => {
    try {
        const first = await readFile("D:/node-and-express-js/1-node-tutorial/content/first.txt", "utf8")
        const second = await readFile("D:/node-and-express-js/1-node-tutorial/content/second.txt", "utf8")
        await outputFile("D:/node-and-express-js/1-node-tutorial/content/result.txt",`This is data: ${first} ${second}`,{flag:"a"})
        console.log(first,second);
    } catch (error) {
        console.log(error);
    }
}

// const start = async() => {
//     try {
//         const first = await readFilePromise("../content/first.txt", "utf8")
//         const second = await readFilePromise("../content/second.txt", "utf8")
//         await outputFilePromise("../content/result.txt",`This is data: ${first} ${second}`)
//         console.log(first,second);
//     } catch (error) {
//         console.log(error);
//     }
// }

// const start = async() => {
//     try {
//         const first = await getText("../content/first.txt")
//         const second = await getText("../content/second.txt")
//         console.log(first,second);
//     } catch (error) {
//         console.log(error);
//     }
// }
start()