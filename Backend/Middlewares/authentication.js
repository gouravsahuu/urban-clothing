const jwt = require("jsonwebtoken");

const auth = (req,res,next) => {
    const token = req.headers.authorization;
    try{
        if(token){
            jwt.verify(token, "somekey", (err,decoded) => {
                if(decoded){
                    req.body.userID = decoded.userID;
                    next();
                }
                else{
                    res.send({"message":"Something Went Wrong","error":err});
                }
            })
        }
        else{
            res.send({"message":"This is a proctected Route, You need token to access this page"});
        }
    }
   catch(err){
      res.send({"message":"Something Went Wrong","error":err.message});
   }
}

module.exports = {auth};