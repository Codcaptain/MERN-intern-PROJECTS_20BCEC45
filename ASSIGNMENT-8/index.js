const express=require('express');
const fs =require('fs');
const app=express();
const port=4000;
app.get('/getdata',(req,res)=>{
    const content=JSON.parse(fs.readFileSync("cart.json"))
    var sum=0;
    for(let i=0;i<content.length;i++){
        sum=sum+content[i].quantity*content[i].price;
    }
    res.status(200).json({
        message:"Retrieved data",
        data:content,
        TotalAmount:sum
    })
})

app.get('/:id',(req,res)=>{
    product_id=req.params.id;
    const content=JSON.parse(fs.readFileSync("cart.json"))
    const dataid=content.filter(item=>item.product_id==product_id);
    res.status(200).json({
        message:"Retrieved the data for a specific item based on product id",
        data:dataid
})
})
app.listen(port,()=>{
    console.log(`server started at port 4000`);
})