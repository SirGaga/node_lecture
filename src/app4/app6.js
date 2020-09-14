const net = require('net');

const server = net.createServer(socket => {
    const address = socket.address();
    const message = 'server address is '+ JSON.stringify(address);

    socket.write(message,'utf8',() =>{
        const writeSize = socket.bytesWritten;

        console.log('message size is :' + writeSize);
    });
    socket.on('data',data => {
        console.log(data.toString());
        const readSize = socket.bytesRead;
        console.log('data size is :' + readSize);
    })
});

server.listen(8888,() => {
    console.log('server is listening');
});