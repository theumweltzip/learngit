//静态资源请求页面
var http=require('http');
var url=require('url');
var fs=require("fs");
var path=require('path');

http.createServer(function(require,respond){
//得到用户的路径
//127.0.0.1/abc/1.html

var pathname= url.parse(require.url).pathname;//读取之后就剩下abc/1.html
if(pathname=="/"){//设置当前请求头。就是页面加载的时候，只要是等于请求页面原样
    pathname="index.html";
}
//请求文件的后缀、拓展名
var extname=path.extname(pathname);
console.log(extname);//.html .jpg


//真的要去读取这个文件
fs.readFile("./static/"+pathname,function(err,data){//一个叫做错误，一个叫做数据；错误前置



    if(err){//如果此文件不存在；就应该用404返回；就是这个pathname不存在；
       //又要开启读文件
        fs.readFile("./static/404.html",function(err,data){
            respond.writeHead(404,{"Content-Type":"text/html;charset=utf8"});
            respond.end(data);
        });
        return;//此时代表结束
    };
    //MIME类型；就是
    //网页类型  text/html；
    //jpg文件  image/jpg;
var mime=getMime(extname);
    respond.writeHead(200,{"Content-Type":mime});
     respond.end(data); 
})
  
}).listen(3000,"127.0.0.1");
//用来过滤我们需要的后缀，然后添加解析
function getMime(extname){//这一步可以用来添加一个终极的脉络json文件；就是在里面开始读取这个文件;对应到每个文件头就直接返回这个属性
switch(extname){
    case ".html":return 'text/html';
    break;
    case '.jpg':return "image/jpg";
    break;
    case ".css":return "text/css";
    break;
}
};

//以上就把static变为根目录文件夹；使我们的页面成为一个静态服务器