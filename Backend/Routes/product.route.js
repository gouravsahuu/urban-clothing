const express = require("express");
const {ProductModel} = require("../Models/product.model");

const productRoute = express.Router();

//to get all products
productRoute.get("/all",async (req,res) => {
    const allProducts = await ProductModel.find();
    res.send(allProducts);
})

//to add one product
productRoute.post("/add", async(req,res) => {
    const products = req.body;
    try{
        const add = new ProductModel(product);
        await add.save();
        res.send({"message":"Products successfully added"});
    }
    catch(err){
        res.send({"message":"Something Went Wrong","error":err.message});
    }
})

productRoute.delete("delete/:id",async(req,res) => {
    const id = req.query.id;
    try{
        await ProductModel.findByIdAndDelete({_id:id});
        res.send({"message":"Product Deleted"});
    }
    catch(err){
        res.send({"message":"Something Went Wrong","error":err.message});
    }
})

module.exports = {productRoute};