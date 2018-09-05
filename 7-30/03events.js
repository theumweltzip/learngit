const EventEmitter= require("events");//请求事件模块

class Player extends EventEmitter {};

var player = new Player();

player.on('play',track=>{//进行事件侦听
    console.log(`正在播放《${track}》`)
});

player.emit('play','过个');//从下往上进行数据发射
player.emit('play','滚蛋');
//进行调用之后，会在控制台输出
//正在播放《过个》
//正在播放《滚蛋》

//emit 从下往上发射数据  broadcast 广播，是从上至下的发射
