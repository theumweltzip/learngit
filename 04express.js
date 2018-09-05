var express=require('express');
var app=express();
app.get('/AaB',function(req,res){
    res.send('这是请求头不分大小写的地方')
});


app.listen(9000,'localhost');