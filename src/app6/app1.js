const http = require('http');
const events = require('events');

const httpServer = http.createServer();

httpServer.setMaxListeners(2);
httpServer.on('request',(request,response) => {
    if (request.url === '/'){
        console.log('addListener');
        response.end('end')
    }
});

const listener = (request,response) => {
    if (request.url === '/') {
        console.log('hello world');
        response.end('welcome');
    }
}

const listener2 = (request,response) => {
    if (request.url === '/') {
        console.log('hello world');
        response.end('welcome');
    }
}
console.log('default max listener count:'+events.EventEmitter.defaultMaxListeners);

httpServer.on('request',listener);
httpServer.on('request',listener2);

httpServer.listen(3000,()=>{
    console.log('listening to port 3000');
});