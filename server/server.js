const express = require('express');
const app = express();
const cors = require("cors")

app.use(express.json())
app.use(cors())

const db = require('./models');

const users_router = require("./routes/Users")

app.use("/Users",users_router)


db.sequelize.sync().then(()=>{
    app.listen(3001,()=>{
        console.log("server started in PORT 3001...")
    });
});