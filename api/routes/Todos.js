const express = require("express");
const router = express.Router();


// jwt
const {verify_token} = require("../auths/JWT")

// db
const User = require("../model/Users")


router.get("/:id", verify_token,async(req,res)=>{
    const id = req.params.id;
    console.log(id)
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

router.post("/:id/add",verify_token,async(req,res)=>{
    const id = req.params.id;
    const {task,status} = req.body
    const alreadyExists = await User.findById(id);
    if (alreadyExists){
        const newTodo = {
            task:task,
            status:status,
            id:alreadyExists.tasks.length + 1
        }
        alreadyExists.tasks.push(newTodo)
        await alreadyExists.save()
        res.json({tasks:alreadyExists.tasks,email:alreadyExists.email})
    }else{
        res.status(403).json({message:"No User exists"})
    }
})

router.delete("/:id/delete/:deleteid",verify_token,async (req,res)=>{
    const id = req.params.id;
    const deleteid = req.params.deleteid
    const alreadyExists = await User.findById(id);
    if (alreadyExists){
        for (i=0;i<alreadyExists.tasks.length;i++){
            if (alreadyExists.tasks[i].id === Number(deleteid)){
                alreadyExists.tasks.splice[i,1]
                await alreadyExists.save()
                res.status(200).json(alreadyExists.tasks)
            }
        }
    }else{
        res.status(403).json({message:"No user Exists"})
    }
})

module.exports = router;