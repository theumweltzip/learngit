var express=require('express');
var app=express();
app.get('/haha',function(req,res){
    res.send('这是haha页面')
});

app.get(/^\/student\/([\d]{10})$/,function(req,res){
    //用正则表达式验证路由头
    res.send("学生信息，学号"+req.params[0]);
});

app.get('/teacher/:gonghao',function(req,res){
    res.send("老是信息"+req.param.gonghao)
})


app.get("/student/:id",function(req,res){

    var id=req.params["id"];

    var reg=/^[\d]{6}$/;
    if(reg.test(id)){
            res.send(id);//传出id值
    }else{
        res.send("请检查格式")
    }

});

app.listen(9000);