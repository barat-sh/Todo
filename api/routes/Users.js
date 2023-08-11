const express = require("express");
const bcrypt = require("bcrypt");
const json = require("jsonwebtoken");
const router = express.Router()

// secret key
const SECRET = "s3cr3tk3y"

// bcrypt


// db
const User = require("../model/Users");

router.get("/data",async(req,res)=>{
    const list_of_users = await User.find()
    res.send(list_of_users)
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
    if(alreadyExists && password === alreadyExists.password){
        res.json({id:alreadyExists.id})
    }else{
        res.json({message:"Incorrect email or password"})
    }
})

router.get("/:id",async(req,res)=>{
    const id = req.params.id;
    const alreadyExists = await User.findById(id)
    if (alreadyExists){
        const user = {
            email:alreadyExists.email,
            tasks:alreadyExists.tasks
        }
        res.json({user})
    }else{
        res.status(404)
    }
})

module.exports = router
