var http=require("http");
var server=http.createServer(function(require,respond){
//1.得到url
//网站为一个平面，通过请求头就可以获取里面老师和学生的信息；这就是顶层路由的设计
    var userurl=require.url;
    respond.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    // .writeHead(200,{'Content-Type':'text/html;charset=utf8'});

// 2.substr函数来判断此时的开头，进行分析，你得到了什么请求路由头

if(userurl.substr(0,9)=="/student/"){
    var studentid=userurl.substr(9);
// 3.判断输入的路由头，进行判定
    if(/\d{10}/.test(studentid)){
//4.输出内容
    respond.end("你要查询学生信息，id为"+studentid);

}else{
    respond.end("学生学号位置不对");
}

}else if(userurl.substr(0,9)=="teacher"){
    var teacherid=userurl.substr(9);
    if(/\d{6}/.test(teacherid)){
        respond.end("你要查询老师信息，id为"+teacherid);
    }else{
        respond.end("老师信息有误");
    }
}else{
    respond.end("请检查url");
}

});

server.listen(3000,"127.0.0.1");