const dgram = require('dgram');

const message = Buffer.from('This message comes from server');

const socket = dgram.createSocket('udp4',(msg, rinfo) => {
    socket.send(message,0,message.length,rinfo.port,rinfo.address,((error, bytes) => {
        if (error){
            console.log(error);
            return;
        }
        console.log('Server has sent ' + bytes + ' bytes message');
    }))
});

socket.bind(9999,'localhost',()=>{
    console.log('Server has binded to 9999 ');
})

socket.on('message',(msg, rinfo) => {
    console.log('message event occurred');
    console.log(rinfo.toString());
})