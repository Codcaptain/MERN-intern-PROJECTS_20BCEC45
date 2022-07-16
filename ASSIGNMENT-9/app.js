const express=require('express');
const fs= require('fs');
const {uuid}=require('uuidv4');
const {Product}=require('./Product');
const app=express();
const port=4000;

app.use(express.json())
app.get('/',(req,res)=>{
    try{
        console.log(__dirname)
        const filearray=fs.readdirSync(__dirname);
        console.log(filearray);
        let product=[];
        let message='';
        if(filearray.includes('product.json'))
            product=JSON.parse(fs.readFileSync('product.json'));
        console.log(product);
        if(product.length>0)
            message='products fetched successfully';
        else
            message='No product found';
        return res.status(200).json({
        message:message,
        product
    })

    }catch(err){
        return res.status(500).json({
            message:"something went wrong",
            error:err.message
        })
    }
})
// app.get('/getrectangle/:height',(req,res)=>{
//     console.log(req.params);
//     height=req.params.height;
//     const content=JSON.parse(fs.readlinkSync("data.json"));
//     const matcheddata=content.filter(item=>item.height==height);
//     res.status(200).json({
//         message:"Retrieved data",
//         data:matcheddata
//     })
// })

app.post('/add',(req,res)=>{
    try{
        //getting contents of the directory in order to check for the file product.json
        const filearray=fs.readdirSync(__dirname);
        let product=[];
        let error='';
        //checking for the product.json exist in the directory or not
        if(filearray.includes('product.json'))
        product=JSON.parse(fs.readFileSync('product.json'));//reading product.json
        //as reading input for product object
        const{product_name, product_price, product_description,product_image}=req.body;
        //creating product object
        if(product_name==''&& error==''){
            error='Missing product name'
            res.status(400).json({
                message:error
            })
        }
        if(product_price==''&& error==''){
            error='Missing product price'
            res.status(400).json({
                message:error
            })
        }
        const products = new Product(uuid(),product_name, product_price, product_description,product_image);
        //adding it to the existing product array read form the product.
        product=[...product,products];
        fs.writeFile('product.json',JSON.stringify(product),(err)=>{
            if(err)
            res.status(500).json({
                message:'something went wrong while writing file',
                error:err
            })
            res.status(200).json({
                message:"product saved successfully",
                products
            })
        })
    }catch(err){
        res.status(500).json({
            message:"something went wrong",
            error:err.message
        })

    }
})

app.delete('/delete/:product_id',(req,res)=>{
    const{product_id}=req.params;
    let product=JSON.parse(fs.readFileSync('product.json'));//reading product.json
    product=product.filter(item=>item.product_id!=product_id);
    fs.writeFile('product.json',JSON.stringify(product),(err)=>{
        if(err)
        return res.status(500).json({
            message:"something went wrong",
            error:err
        })
        return res.status(201).json({
            message:`product  deleted successfully`,
           
        })
    })

})
app.put("/update/:product_id",(req,res)=>{
    const{product_id}=req.params;
    const{product_name, product_price, product_description,product_image}=req.body;
    let product=JSON.parse(fs.readFileSync('product.json'));
    product=product.filter(item=>item.product_id!=product_id);
    const products = new Product(product_name, product_price, product_description,product_image);
    //adding it to the existing product array read form the product.
    product=[...product,products];
    fs.writeFile('product.json',JSON.stringify(product),(err)=>{
        if(err)
        return res.status(500).json({
            message:"something went wrong",
            error:err
        })
        return res.status(200).json({
            message:"New product updated successfully",
           
        })
    })
})

app.listen(port,()=>{
    console.log(`server started at port ${port}`);
})