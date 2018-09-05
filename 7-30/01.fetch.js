const axios=require("axios");//引入axios模块
axios.get('http://localhost:3000/posts')
//获取这个端口的json文件；同时也可应用于其他网站地址
// http://localhost:3000/posts---->https://www.lagou.com/
  .then(function (response) {
  
    console.log(response);
  });//进行http请求，然后输出内容
