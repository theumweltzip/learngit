var http = require("http");//请求http模块
var url=require("url");//请求url模块
var server =http.createServer(function(req,res){
var pathname=url.parse(req.url).pathname;
//输出里面的pathname部分==pathname:/anbs/1/2.html
var query=url.parse(req.url,true).query;
//输出里面的query部分,true将查询变为对象；那么里面的属性就都可以点出来
console.log(query);//{ id: '123', sex: 'man', age: '18' }

console.log(query.age)//18
var hash=url.parse(req.url).hash;
// 完整的url为 http://127.0.0.1:8000/anbs/1/2.html?id=123#abc
console.log('请求到的url：'+req.url);///anbs/1/2.html?id=123
console.log('请求到的pathname:'+pathname);  //pathname: /anbs/1/2.html 端口后面的到问号？为止
//query:id=123

//console.log(url.parse('http://127.0.0.1:8000/anbs/1/2.html?id=123#abc',true,true));
//为甚吗没有输出#后面的内容，因为这一部分需要hash来输出;需要请求完整的http连接才能输出
//console.log(req.headers.referer)
console.log('请求到的hash:'+hash);
res.end();
})
server.listen(8000,"127.0.0.1");