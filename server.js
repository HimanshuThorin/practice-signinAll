// const express = require("express");
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// mongoose.set('strictQuery', false);
// const app = express();

// app.use(express.json());

// mongoose.connect("mongodb://0.0.0.0:27017/userDB").then(()=>{   
//     console.log("connected to database");
// });


// app.post("/login", async(req,res)=>{
//     const {email, password} = req.body
//     console.log(req.body, "reqbody")
//     const token = jwt.sign({password}, "my_secret_key");
//     res.json({
//         token: token
//     })
// });


// app.get("/protectedRoute", ensureToken, async(req, res)=>{
//     jwt.verify(req.token, "my_secret_key", function(err, data){
//         if(err){
//             res.sendStatus(403);
//         }else{
//             res.json({
//                 text: "my Protected route"
//             })
//         }
//     })
  
// });

// function ensureToken(req, res, next){
//     const bearerHeader = req.headers["authorization"];
//     console.log(bearerHeader,"bearerHeader")
//     if(typeof bearerHeader !== "undefined"){
//         const bearer = bearerHeader.split(" ");
//         const bearerToken = bearer[1];
//         req.token = bearerToken;
//         next();
//     }else{
//         res.sendStatus(403);
//     }
// }





// let port = 4000;

// app.listen(port, ()=>{
//     console.log(`listening to port ${port}`)
// })












// // app.post("/signUp", async(req, res)=>{
//     //    try {
//     //     let jwtSecretKey = "hellothisisasecret";
//     //     const {name, email, password} = req.body;
//     //     let result =  new User(req.body);
//     //     let saveResult =  await result.save();
//     //     res.send(saveResult);
    
//     //    } catch (error) {
//     //      res.send("the error is"  + error);
//     //    }
//     // })
    
//     // app.get("/find", async(req, res)=>{
//     //     try {
//     //         let result = await User.findOne({name: "himanshu Dube"})
//     //         res.send(result);
//     //     } catch (error) {
//     //         res.send("error is " + error)
//     //     }
//     // })
    
//     // // app.post("/update", async(req, res)=>{
//     // //     try {
//     // //         let result = await User.findOneAndUpdate(
//     // //             {name: "Frodo Baggins"},
//     // //             {email: "frodo@125.com"},
//     // //           {upsert: true}
//     // //         )
    
//     // //         res.send(result);
//     // //     } catch (error) {
            
//     // //     }
//     // // })