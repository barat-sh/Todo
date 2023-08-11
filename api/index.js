const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors())
app.use(express.json())

// routes
const userRoute = require("./routes/Users")

app.use("/user",userRoute)

app.listen(3001,()=>{
    console.log("server hitting")
})
