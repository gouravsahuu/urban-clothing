const express = require("express");
const cors = require("cors");
const app = express();
const {connection} = require("./Configs/db");
const {userRoute} = require("./Routes/user.route");
const {productRoute} = require("./Routes/product.route");
require("dotenv").config();
const port = process.env.port;

app.use(express.json());
app.use(cors());

app.use("/user",userRoute);
app.use("/product",productRoute);

app.get("/",(req,res) => {
    res.send({"message":"This is the backend server for Urban Clothing"});
})

app.listen(port, async () => {
   try{
       await connection;
       console.log("Connected to Database");
   }
   catch(err){
       console.log(err.message);
   }
   console.log(`Server is running at port ${port}`);
})