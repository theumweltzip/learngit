var express=require('express');
var app=express();

app.use(express.static("./7-30/static"));

app.listen(3000);

//静态文件自由的读取app.use