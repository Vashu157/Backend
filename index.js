const express = require('express');
require('dotenv').config();
const app = express();


app.get('/',(req,res) => {
    res.send('Helow world')
})
app.get('/login',(req,res)=>{
    res.send("<h1>login page</h1>");
})
app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${process.env.PORT}`)
})