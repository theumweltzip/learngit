var http = require("http");
var fs = require("fs");
var server = http.createServer(function (require, respond) {
    //不处理小图标
    if (require.url == "/favicon.ico") {
        return;
    }
    //遍历test里面所有的文件，文件夹
    fs.readdir("./test/", function (err, files) {
        // files是一个存放文件（夹）的数组
        //存放文件夹的数组
        var wenjianjia = [];
        //迭代器就是强行把异步的函数转变为同步的函数；
        //就是1做完了。在做2，之后一次迭代3,4,5
        (function iterator(i) {
            if (i == files.length) { //此时遍历结束
                console.log(wenjianjia); //[ 'aabb', 'ccdd', 'ffgg' ]输出里面的文件夹
                return;
            }
            
            fs.stat("./test/" + files[i], function (err, stats) {
                //检测成功后做的事情
                if (stats.isDirectory()) {
                    //如果是文件夹，那么放入数组。不是，什么也不做
                    wenjianjia.push(files[i]);
                }
                iterator(i + 1); //进行迭代
            })
        })(0) //先执行第0项
    }); //这样就能强行把stat的异步变成同步
    respond.end();
});

server.listen(3000, "127.0.0.1");