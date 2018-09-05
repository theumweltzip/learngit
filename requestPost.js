const http= require('http');
const querystring=require('querystring');

const Postdata= querystring.stringify({
author:'request author',
title:'request title',

});//这里请求的是一个字符串；author=request%20author&title=request%20title。详见stringify

const options={
    hostname:'localhost',
    port:3000,
    method:'post',
    path:'/posts',
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
    }
};

var request= http.request(options,res=>{
   // console.log(res);
    res.setEncoding('utf-8');//设置解码
    res.on('data',chunk=>{//进行数据接受
        console.log(data)
    });

    res.on("error",()=>{
        console.log("post sucess")
    });

});

request.on('error',error=>{
    console.log(error);
});

request.end();

//这是进行添加的请求，此时就是一种方式，掌握一种，还可以进行第二种操作；这老师真他妈傻逼

