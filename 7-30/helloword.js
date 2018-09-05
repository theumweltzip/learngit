// var mysql=require('mysql');
// console.log(mysql);
// 1.第三方模块
// 2.nodejs自带模块

var http=require('http');

http.createServer(function(request,response){
response.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
// response.write('helloword!');
// //response 叫做返回，从服务器端返回信息到浏览器端，返回格式是HTML，返回的编码utf8
// response.end();
//将上面两行代码缩减成一行;直接把内容写在end的括号里面
response.end('helloword nodejs')


}).listen(4444);
console.log('server is running at 4444');