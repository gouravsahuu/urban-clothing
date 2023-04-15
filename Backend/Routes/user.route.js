const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {UserModel} = require("../Models/user.model");

const userRoute = express.Router();

userRoute.post("/register",async (req,res) => {
    const {name,email,gender,password,phone_number} = req.body;
    try{
        const existingUser = await UserModel.find({email});
        if(existingUser.length == 0){
            bcrypt.hash(password, 5, async (err,hash) => {
                const user = new UserModel({name,email,gender,phone_number,password:hash});
                await user.save();
                res.send({"message":"User registered Successfully"});
            })
        }
        else{
            res.send({"message":"User already exists"});
        }
    }
    catch(err){
        res.send({"message":"Something Went Wrong","error":err.message});
    }
})

userRoute.get("/all",async(req,res) => {
    const allUsers = await UserModel.find();
    res.send(allUsers);
})

userRoute.get("/id/:id",async(req,res) => {
    const {id} = req.params;
    try{
        const indiUser = await UserModel.find({_id:id});
        if(indiUser.length > 0){
            res.send(indiUser);
        }
        else{
            res.send({"message":"Invalid User"});
        }
    }
    catch(err){
        res.send({"message":"Something Went Wrong","error":err.message});
    }
})

userRoute.post("/login",async (req,res) => {
     const userDetail = req.body;
     try{
        const user = await UserModel.find({email:userDetail.email});
        if(user.length > 0){
            bcrypt.compare(userDetail.password, user[0].password, (err,result) => {
                if(result){
                    const token = jwt.sign({userID:user[0]._id},"somekey",{expiresIn: '1h'});
                    res.send({"message":"Log-In Success","token":token,"help":"You can use this token to access protected routes","username":`${user[0].name}`,"userID":`${user[0]._id}`});
                }
                else{
                    res.send({"message":"Login Failed, Invalid Credentials"});
                }
            })
        }
        else{
            res.send({"message":"Login Failed, Invalid Credentials"});
        }
     }
     catch(err){
        res.send({"message":"Something Went Wrong","error":err.message});
     }
})

module.exports = {userRoute};