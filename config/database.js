const mongoose = require("mongoose");

require("dotenv").config();
const url= process.env.DATABASE_URL;
function connectWithDb(){
    mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("DB connected successfully");
    })
    .catch((err)=>{
        console.log("Db facing connection issues");
        console.log(err);
        process.exit(1);
    })
};
module.exports= connectWithDb;