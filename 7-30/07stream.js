const fs=require('fs');
const zlib=require('zlib');

var fileReadStream=fs.createReadStream('text.txt');//创建一个可读流
var fileWritestream=fs.createWriteStream('text.txt.gz');//创建一个可写流

// 把一个文件读出来。再把一个文件写进去

fileWritestream.on('pipe',source=>{
    console.log(source);
});

fileReadStream.pipe(zlib.createGzip()).pipe(fileWritestream);
//进行读文件流之后再进行写文件流，通过管道进行传送，可以将大文件压缩

var count=0;
fileReadStream.once('data',chunk=>{
    console.log(chunk.toString());
})//读出我们的文件


fileReadStream.on('data',chunk=>{//查看读流的时候，对文件进行多少块的分解

    console.log(`${++count}接收到${chunk.length}`);

});

fileReadStream.on("end",()=>{
    console.log('读取结束')
});