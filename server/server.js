const express = require('express');
const app = express();
const cors = require("cors")

app.use(express.json())
app.use(cors())

const db = require('./models');

const users_route = require("./routes/Users")
const login_route = require("./routes/login")

app.use("/Users",users_router)
app.use("./Users",login_route)


db.sequelize.sync().then(()=>{
    app.listen(3001,()=>{
        console.log("server started in PORT 3001...")
    });
});