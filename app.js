const path = require('path');
const fs = require('fs');
fs.writeFile('message.txt','Hello there',(err) =>{
    if(err){
        throw err;
    console.log('file has been writtedn');    }
});
console.log("hello");
/* const url = require('url');
const address  = "https://mail.google.com/mail/?tab=rm&ogbl";
const parsedUrl = url.parse(address,true,1);
 console.log(parsedUrl.host); */
 
 /*
const fileLocation = path.join(__dirname,'app.js');
console.log(fileLocation);
const fileName = path.basename(fileLocation);
console.log(fileName);
console.log(path.extname(fileName)); */