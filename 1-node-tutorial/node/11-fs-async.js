const {readFile, outputFile} = require("fs-extra")

console.log("start");

readFile("./content/first.txt","utf8",(err,result)=>
{
    if(err){
        console.log(err);
        return
    }
    const first = result;
    readFile("./content/second.txt","utf8",(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result;
        outputFile(
            "./content/result-async.txt",
            `here is result : ${first}, ${second}`,
            (err,result)=>{
                if(err){
                    console.log(err);
                    return
                }
                console.log("done");
            }
        )
    })
})
console.log("starting next task");