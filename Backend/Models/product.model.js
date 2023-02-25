const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const productSchema = mongoose.Schema({
        title:{type:String,required:true},
        price:{type:Number,required:true},
        image:{type:String,required:true},
        colour:{type:String,required:true},
        category:{type:String,required:true},
        inStock:{type:Boolean,required:true},
        rating:{type:String,required:true}
})

const ProductModel = mongoose.model("product",productSchema);

module.exports = {ProductModel};