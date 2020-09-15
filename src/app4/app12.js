const dgarm = require('dgram');
const message = Buffer.from('This message comes from client');

const socket = new dgarm.createSocket('udp4');

socket.send(message,0,message.length,9999,'localhost',(error, bytes) => {
    if (error){
        console.log(error);
        return ;
    }
    console.log('client has set ' + bytes + ' bytes message');
})
socket.on('message',(msg, rinfo) => {
    const message2Send = 'hello world';
    socket.send(message2Send,0,message2Send.length,9999,'localhost');
})