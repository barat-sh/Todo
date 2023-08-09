const express = require("express");
const router = express.Router()

// db
const User = require("../model/Users");

router.get("/data",async(req,res)=>{
    const list_of_users = await User.find()
    res.send(list_of_users)
})

router.post("/register",async(req,res)=>{
    const {email,password} = req.body;
    const alreadyExists = await User.findOne({email});
    if (!alreadyExists){
        try{
            const newUser = new User({
                email:email,
                password:password
            })
            await newUser.save()
        }catch(error){
            res.json({message:"error...",error})
        }
        res.status(200).json({message:"Registered"})
    }else{
        res.json({message:"User already Exists..."})
    }
})

router.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    const alreadyExists = await User.findOne({email});
    if(alreadyExists && password === alreadyExists.password){
        res.json({message:"Logged in...",id:alreadyExists._id})
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