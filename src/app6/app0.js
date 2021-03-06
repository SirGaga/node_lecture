const http = require('http');

const httpServer = http.createServer();
// alias for addListener

httpServer.addListener('request',(request,response) => {
    if (request.url === '/'){
        console.log('addListener');
        response.end('end')
    }
})

httpServer.once('request',(request,response) => {
    if (request.url === '/') {
        console.log('on');
        response.end('end2');
    }

});

const listener = (request,response) => {
    if (request.url === '/') {
        console.log('hello world');
        response.end('welcome');
    }
}

httpServer.on('request',listener);

// off alias for removeListener
//httpServer.removeListener('request',listener);

httpServer.removeAllListeners('request');




httpServer.listen(3000,()=>{
    console.log('listening to port 3000');
});