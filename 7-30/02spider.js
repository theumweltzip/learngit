const https = require("https"); //因为这里请求的是https网站，所以请求https模块
const cheerio = require('cheerio'); //请求一个类jquery模块

function filtermenu(html) { //制定一个函数，进行字符串的过滤
    var $ = cheerio.load(html); //加载我们的html,进行过滤，并赋值给$；
    // console.log($);//输出我们加载的页面框架
    var menu = $(".menu_main"); //进行类似jq的dom选择操作；选择$框架中class名为.menu_main的
    //console.log(menu);输出我们找到的这个class框架。
    var menuDate = []; //定义一个空数组

    menu.each((index, value) => {//对找的框架内容进行循环；
        var menuTitle = $(value).find("h2").text();
        //console.log(menuTitle);//这样就会输出h2标签中的文字
        var menulists = $(value).find('a'); //找到里面的a标签框架；
        console.log(menulists); 
console.log(23)
        var menulist = [];//定义一个空数组

        menulists.each((index, value) => {
         //对a标签中的内容进行遍历；将数据输出到上面定义的空数组中
        menulist.push($(value).text());//将a标签添加到空数组之中
        
    });

        menuDate.push({
            menulist,
            menuTitle
        });

    });
    console.log(menuDate);
    return menuDate;
};

https.get("https://www.lagou.com/", res => {
    var responseDate = ""; //设置一个空的集合；

    res.setEncoding('utf-8'); //设置请求的解码样式

    res.on('data', chunk => { //对请求到的数据进行切块
        responseDate += chunk;
    });
  

    res.on('end', () => { //请求结束
        filtermenu(responseDate); //进行函数调用
        console.log(1); 
        //console.log(responseDate);//输出数据，此时输出的是字符串的网页代码
    });
    //下面的想法是对字符串进行对象选择；类似于jquery的对象选择器
});

//我们的网络都是请求，而这些请求有和我们的地址相关；这个就像我们搜索引擎的底层原理一样
//抓取关键词，然后进行页面输出