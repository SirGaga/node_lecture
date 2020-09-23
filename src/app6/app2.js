const http = require('http');

const httpServer = http.createServer();

httpServer.on('request',(request,response) => {
    if (request.url === '/'){
        console.log('on');
        response.end('end')
    }
});

httpServer.listen(3000,()=>{
    console.log('listening to port 3000');
});
//先编写响应事件，再编写发射事件
httpServer.on('serverEvent',(param1,param2,param3) => {
    console.log(param1);
    console.log(param2);
    console.log(param3);
})

httpServer.emit('serverEvent','hello','world','welcome');

