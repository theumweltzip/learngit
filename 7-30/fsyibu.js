
//进行文件读取
var http=require("http");
var fs=require("fs");

var server=http.createServer(function(require,respond){
respond.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
   
if(require.url=="/favicon.ico"){//避免两次请求，不处理小图标的请求
    return
}
// //stat检测状态
// fs.stat("./test",function(error,data){
// //判断这个路径是不是一个文件夹
// console.log(data.isDirectory());//true
// })
var wenjianjia=[];
fs.readdir("./test",function(err,files){
    //files是一个文件名的数组，并不是文件的数组；表示./test文件夹下的所有东西--包括文件及文件夹
    //node js 没有提供单独读取文件夹或者文件的方法
    for(var i=0;i<files.length;i++){
        var thefile=files[i];
        //又要进行一次检测，在试着输出里面的单独文件
        fs.stat('./test/'+thefile,function(err,stats){
            //如果他是一个文件夹，那么就输出他
            if(stats.isDirectory()){
                wenjianjia.push(thefile);
            }

        })
        console.log(wenjianjia);
        //此时为循环里面套异步，因为循环很快，不会等待；会持续造成请求；而无法完全输出
    }
  


})


})


server.listen(5000,"127.0.0.1")