var http = require("http");//请求http模块
var url=require("url");//请求url模块
var server =http.createServer(function(req,res){

 console.log(req.url);
 res.end();
 
})

server.listen(8000,"127.0.0.1");