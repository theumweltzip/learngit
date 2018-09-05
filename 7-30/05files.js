const fs=require('fs');
module.exports={//接口暴露
readFile:function(file,res){//读文件模块
    var data=fs.readFile(file,'utf-8',(err,data)=>{
        res.write(data);
        res.end();
    })
},

readimageFile:function(file,res){//读图片
var data=fs.readFile(file,"binary",(err,data)=>{
    res.write(data,'binary');
    res.end();
})

},

writeFile:function(file,res){//进行写文件
fs.writeFile(file,'这里是写的文件的内容',err=>{
    if (err) throw err;
    res.write('写入成功');
    res.end();

})


}





}