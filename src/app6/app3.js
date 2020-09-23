const EventEmitter = require('events');
const emitter = new EventEmitter();

// 这里加名字而不用箭头函数是因为后续还需要用到这个名字
emitter.on('myEvent',function myListener(){
    console.log('myListener');
});

emitter.on('myEvent',function myListener2(param1,param2){
    console.log(`myListener2:${param1}, ${param2}`);
});

emitter.on('myEvent',function myListener3(...params){
    const values = params.join(',');
    console.log(`myListener3:${values}`);
});

console.log(emitter.listeners('myEvent'));

emitter.emit('myEvent','a','b','c','d','e','f');