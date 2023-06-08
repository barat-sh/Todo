const express = require('express');
const app = express();

const db = require('./models')


app.listen(3001,()=>{
console.log('server started - PORT 3001...')
})
