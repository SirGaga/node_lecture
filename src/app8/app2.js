const childProcess = require('child_process');

const lsChildProcess = childProcess.spawn('node', ['support.js']);

// windows下没有演示成功
lsChildProcess.stdout.on('data',data => {
    console.log(data.toString());
    console.log(`child process id : ${lsChildProcess.pid}`);
})

lsChildProcess.on('exit',(code, signal) => {
    console.log(code);
})