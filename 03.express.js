var express = require("express");  
    var app = express();  
    app.set("view engine","ejs");  
    app.get("/",function(req,res){     
    res.render("news",//拓展名可以省略
        {       
            "news" : ["我是小新闻啊","我也是啊","哈哈哈哈"]     
        }); 
    });  
    app.listen(3000); 