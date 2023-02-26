const express = require("express");
const {ProductModel} = require("../Models/product.model");

const productRoute = express.Router();

//to get all products
productRoute.get("/all",async (req,res) => {
    const allProducts = await ProductModel.find();
    res.send(allProducts);
})

//sorted price
productRoute.get("/sort/:num",async (req,res) => {
    let x = req.params.num;
    try{
        const allProducts = await ProductModel.find().sort({price:x});
        res.send(allProducts);
    }
    catch(err){
        res.send({"message":"Something Went Wrong","error":err.message});
    }
})

//to add one product
productRoute.post("/add", async(req,res) => {
    const products = req.body;
    try{
        const add = new ProductModel(products);
        await add.save();
        res.send({"message":"Products successfully added"});
    }
    catch(err){
        res.send({"message":"Something Went Wrong","error":err.message});
    }
})


//deleting a product by its id
productRoute.delete("/delete/:id",async(req,res) => {
    const id = req.params.id;
    try{
        await ProductModel.findByIdAndDelete({_id:id});
        res.send({"message":"Product Deleted"});
    }
    catch(err){
        res.send({"message":"Something Went Wrong","error":err.message});
    }
})

module.exports = {productRoute};