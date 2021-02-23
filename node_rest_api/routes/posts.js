const express = require('express');
const Post  = require('../modules/Post');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('we are on posts');
    });

    router.get('/specific',(req,res)=>{
        res.send('we are on specific posts');
        });
    router.post('/',(req,res)=>{
        console.log(req.body);
    })
    

    module.exports = router;