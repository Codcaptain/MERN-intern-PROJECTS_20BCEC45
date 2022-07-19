const express =require('express');
const fs= require('fs');
const {Product}=require('../models/Product');
const router=express.Router();//helps to identify a unique url

router.get('/',async(req,res)=>{
    try{
        const products =await Product.find();
        return res.status(200).json({
        message:"Course retreived successfully",
        products
    })

    }catch(err){
        return res.status(500).json({
            message:"something went wrong",
            error:err.message
        })
    }
})
router.post('/add',async(req,res)=>{
    try{
        
        //as reading input for product object
        const{product_name,product_price,product_description,product_image}=req.body;
        //creating product object
        if(product_name==''&& error==''){
            error='Missing courses name'
            res.status(400).json({
                message:error
            })//validations
        }
        if(product_price==''&& error==''){
            error='Missing courses price'
            res.status(400).json({
                message:error
            })
        }
        const productobg={
            product_name,
            product_price,
            product_description,
            product_image
        }
        const product =new Product(productobg);
        await product.save();
        res.status(200).json({
            message:"product saved successfully"
        })
    }catch(err){
        res.status(500).json({
            message:"something went wrong",
            error:err.message
        })

    }
})

router.delete('/delete/:id',async(req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message:"Product gets Deleted"
        })
    }catch(err){
        return res.status(500).json({
            message:"something went wrong ",
            error:err.message
        })

    }

})
router.put("/update/:id",async(req,res)=>{
    try{
    const id=req.params.id;
    const{product_name,product_price,product_description,product_image}=req.body;
    const product =await Product.findById(id);
    product.product_name=product_name;
    product.product_price=product_price;
    product.product_description=product_description;
    product.product_image=product_image;
    await product.save();
    return res.status(200).json({
        message:"Data updated successfully"
    })
    }catch(err){
        return res.status(500).json({
            message:"Something went wrong ",
            error:err.message
        })
    }
})

router.get('/:name',async(req,res)=>{
    try{
        const product_name= req.params.product_name;
        const product =await Product.findOne({product_name:req.params.name});
        res.status(200).json({
            message:"Data Fetched",
            product
        })
    }catch(err){
        res.status(500).json({
            message:"something went wrong",
            error:err.message
        })

    }
})


module.exports=router

