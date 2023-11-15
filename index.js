const express= require("express");
const app= express();

require("dotenv").config();
const PORT= process.env.PORT ||5000;
//MIDDLEWARE
app.use(express.json());
const blog = require("./routes/blogs");
//mount
app.use("/api/v1",blog);

const connectWithDb= require("./config/database");
connectWithDb();
//start the server
app.listen(PORT,()=>{
    console.log(`Server successfully started at port number ${PORT}`);
})

app.get("/",(req,res)=>{
    res.send(`<h1>Hello Yashika, i really like you a lot</h1>`);
})