const express = require("express");

const app = express();

//Routes
app.get('/',(req,res)=>{
res.send('we are on home');
})
app.get('/post',(req,res)=>{
    res.send('we are on posts');
    })
app.listen(3000);