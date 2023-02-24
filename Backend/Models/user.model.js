const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    gender:{type:String,required:true},
    password:{type:String,required:true},
    phone_number:{type:Number,required:true}
})

const UserModel = mongoose.model("user",userSchema);

module.exports = {UserModel};