const express=require('express');
const {dbConn}=require('./config/db');
const productRoutes =require('./routes/product');



const app= express();
const port =4004;
app.use(express.json())
app.use(productRoutes);
dbConn();
app.listen(port,()=>{
    console.log(`server started at the port ${port}`);
})