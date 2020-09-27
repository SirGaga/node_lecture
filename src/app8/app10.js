const cluster = require('cluster');
const http = require('http');
const os = require('os');

const cpuCount = os.cpus().length;

if (cluster.isMaster){
    for (let i = 0; i < cpuCount; i++){
        cluster.fork();
    }
    cluster.on('exit',(worker, code, signal) => {
        console.log(worker.process.pid);
    })
} else {
    const httpServer = http.createServer((req, res) => {
        let data = '';
        req.on('data',chunk => {
            data += chunk;
        });
        req.on('end',() => {
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end(`${process.pid}`);
        });
    });
    httpServer.listen(3000,() => {
        console.log('listening to port 3000');
    });
}