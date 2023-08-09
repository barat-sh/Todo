const express = require("express");
const app = express();
app.use(express.json())

// routes
const userRoute = require("./routes/Users")

app.use("/user",userRoute)

app.listen(3001,()=>{
    console.log("server hitting")
})