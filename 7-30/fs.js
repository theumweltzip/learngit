//这个代表了node的本质
//进行文件读取
var http=require("http");
var fs=require("fs");

var server=http.createServer(function(require,respond){
    respond.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
   
if(require.url=="/favicon.ico"){//避免两次请求，不处理小图标的请求
    return
}
//给用户强行加一个三位数的ID
 var userid=parseInt(Math.random()*100)+100;
    console.log("欢迎"+userid);//用这个可以证明他是单线程异步的操作
    //因为后面在访问人数增加的情况下，会造成连续显示欢迎XX
    //此时后面的console.log(userid+"文件读取完毕");会被阻塞，
    //但他不会阻塞后面的语句；就是不会阻挡其他用户的访问与执行；
    //但是计算被阻塞的时候，形成死循环的时候，他是不会往下执行的
    for(var i=0;i>0;i++){//计算的死循环

    }
//所以node适用于io繁忙的业务,就像你在排队，不耽误你干其他的事；

// 两个参数，第一个是完整路径，当前目录写./
// 第二个参数，就是回调函数，标示文件读取成功之后，做的事情，
// 第一个参数先进行报错，第二个参数为数据；

fs.readFile("./test/1.txt",function(error,data){
if(error){
    throw error;
}
console.log(userid+"文件读取完毕");

respond.end(data);

})
console.log(2);
})


server.listen(5000,"127.0.0.1")