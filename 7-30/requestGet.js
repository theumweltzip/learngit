const http =require('http');

const options={
hostname:'localhost',
port:4000,
methord:'get',
path:'/posts'
//path代表的是选择的输出的文件

};
 
var responseDate="";
// http.request(options[, callback])默认有回调函数
var request= http.request(options,response=>{
response.setEncoding('utf-8');
// response代表返回，对返回的数据进行解码
response.on('data',chunk=>{
    //将返回的数据切成小块进行返回,箭头函数参数只有一个是不用括号，
    //在与数据进行拼接
    responseDate+=chunk;
});
response.on('end',()=>{

    console.log(responseDate);
})

})

request.end();//结束请求，才能输出结果