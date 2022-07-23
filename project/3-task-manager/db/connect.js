const mongoose = require("mongoose")
const connectString = 
    "mongodb+srv://ram:1234@node-express.xofu2ah.mongodb.net/3-TASK-MANAGER?retryWrites=true&w=majority"

    mongoose.connect(connectString)
    .then(()=>console.log("CONNECTED TO THE DB"))
    .catch((err) => console.log(err))