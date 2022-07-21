const mongoose = require("mongoose")

const connectionString = "mongodb+srv://ram:1234@node-express.xofu2ah.mongodb.net/3-TASK-MANAGER?retryWrites=true&w=majority"

const connectDB = (url) =>{
    return mongoose
    .connect(connectionString,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true,
    })
}

module.exports = connectDB