var http=require("http");
var url=require("url");

var server=http.createServer(function(request,respond){
    respond.writeHead(200,{"Content-Type":"text/html;charset=utf8"})
    //得到查询部分，由于写了true，那么就是一个对象;像当于调用querystring.parse
    // respond.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
var queryObj=url.parse(request.url,true).query
var name=queryObj.name;//获取提交的name
var age=queryObj.age;
var sex=queryObj.sex;
respond.end('服务器收到了提交的内容'+name+age+sex);
console.log(name+age+sex);
}).listen(8000,"127.0.0.1");