const express = require('express');

const router = express.Router();

const Users = require('../models')

router.post('/', async(req,res)=>{
    const Email = req.body.email;
    const user = await Users.findAll({where:{email:Email}});
    if (user.password == req.body.Password){
        res.json("login successful")
    }else{
        res.json("user not found: signup")
    }
})

return Users;