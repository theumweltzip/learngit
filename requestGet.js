//进行连接时，db.json文件的端口不能关闭；要保持打开的状态

const http=require("http");

const options={
    hostname:"localhost",
    port:3000,
    method:'get',
    path:'/posts'
};

console.log('options');

var responseDate="";

var request=http.request(options,response=>{

    response.setEncoding('utf-8');//设置请求编码
    response.on('data',chunk=>{//此时将里面的数据切成一块块
        responseDate += chunk;

    })

    response.on("end",()=>{
        console.log(responseDate);//进行打印数据
    })
    response.on('error',error=>{//返回数据进行报错
        console.log(error);
    })
})

request.on('error',error=>{//请求报错
    console.log(error)
})
request.end();
//在服务器段进行的数据请求