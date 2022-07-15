const {readFile} = require("fs-extra")
console.log("Started a first task");

readFile("./content/first.txt", "utf8", (err, result) =>{
    if (err) {
        console.log(err);
        return
    }
    console.log(result);
    console.log("Complete first task");
})
console.log("Starting next task");