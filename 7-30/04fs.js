const fs=require("fs");//请求fs文件模块

// fs.writeFile('text.txt','这里是writefile的读写测试',err=>{
//     console.log(err);
// });//进行写文件，就是创建文件

// fs.readFile('text.txt',(err,data)=>{//这种写法称为错误前置
//   if(err){console.log(err)};//如果有错误就先输出错误
//     console.log(data.toString());//进行字符串转换
// });//进行文件读取

// //将新的内容追加进文件中
// fs.appendFile('text.txt',"我是新添加进去的内容",err=>{
//     console.log("success");
// });

// //读文件的时候设置编码格式；直接省去了tostring
// fs.readFile('test.txt', 'utf8', (err,data)=>{
//     console.log(data);
// });

// //进行删除文件
// fs.unlink('test.txt',err=>{
//     console.log('success');
// })


//进行图片的读取；因为图片是二进制文件，所以添加格式为binary
fs.readFile('./static/images/0.jpg','binary',(err,data)=>{
console.log(data.toString());

})
