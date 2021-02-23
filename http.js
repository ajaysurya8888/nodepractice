const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req,res)=>{
 

    if(req.url === '/'){
        fs.readFile(path.join(__dirname,'index.html'),(err,data)=>{
          
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        });
       /*  res.write('<h1>the slash is added after url</h1>');
        res.end(); */
    }
    if(req.url === '/user'){
        res.write('the user is added after url');
        res.end();
    }
});
server.listen(3000,()=>{
    console.log("server is up");
});