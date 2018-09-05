var http = require("http");//请求http模块
const files=require('./05files.js');

var server =http.createServer(function(req,res){

 if(req.url!=='/favicon.ico'){
    //  console.log(files)输出引用模块的内容
files.readFile('./static/404.html',res);//读取文件；这是直接调用的文件接口

 };
 
 
})

server.listen(8000,"127.0.0.1");