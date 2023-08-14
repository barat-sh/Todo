const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors())
app.use(express.json())

// routes
const userRoute = require("./routes/Users")
const todoRoute = require("./routes/Todos")

app.use("/user",userRoute)
app.use("/",todoRoute)

app.listen(3001,()=>{
    console.log("server hitting")
})
