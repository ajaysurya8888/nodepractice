var http = require("http");
const { type } = require("os");

http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});

    response.end("Hi Ajay");
}).listen(8081);