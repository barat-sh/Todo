const mongoose = require("mongoose")

try{
    mongoose.connect("mongodb+srv://barath0121:nFuAeH5md3xWuqNt@cluster0.a8ppubw.mongodb.net/Todos?retryWrites=true&w=majority")
    console.log("connected to Database...")
}catch(error){
    console.log(error)
}


const userSchema = new mongoose.Schema({
    email:String,
    password:String,
    tasks:[]
})

const User = mongoose.model("User",userSchema);

module.exports = User