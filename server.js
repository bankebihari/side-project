const express=require("express");
require("dotenv").config();
const app= express();

const router =require("./router/auth-router")
const connectDb= require("./utils/db")
app.use(express.json()); // allow to use json 

 app.use("/api/auth", router);

 

const port=process.env.PORT
connectDb().then(()=>{

app.listen(port,() =>{
    console.log("server is running on the ${port}");
    
})
})