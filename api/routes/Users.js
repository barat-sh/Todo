const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router()

// jwt
const {verify_token,generateToken} = require("../auths/JWT")
// db
const User = require("../model/Users");

router.get("/data",async(req,res)=>{
    const list_of_users = await User.find()
    res.json(list_of_users)
})

router.post("/register",async(req,res)=>{
    const {name,email} = req.body;
    const alreadyExists = await User.findOne({email});
    if (!alreadyExists){
        bcrypt.hash(req.body.password,10,(err,hash)=>{
            if (err){
                res.json({message:"Error",err})
            }else{
                const newUser = new User({
                    name:name,
                    email:email,
                    password:hash
                })
                try{
                    newUser.save()
                }catch(error){
                    res.json({message:"error...",error})
                }
            }
        })
        res.status(200).json({message:"Registered"})
    }else{
        res.json({message:"User already Exists..."})
    }
})

router.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    const alreadyExists = await User.findOne({email});
    if(alreadyExists){
        bcrypt.compare(password,alreadyExists.password,(err,result)=>{
            if (err){
                res.json({message:"Error",err})
            }else{
                if (result){
                    const jwt_token = generateToken(alreadyExists.id)
                    res.json({
                        id:alreadyExists.id,
                        token:jwt_token
                    })
                }else{
                    res.json({message:"Incorrect email or password"})
                }
            }
        })
        
    }else{
        res.json({message:"Incorrect email or password"})
    }
})


module.exports = router