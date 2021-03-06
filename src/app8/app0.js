console.log(process.version);

console.log(process.versions);

console.log(process.platform);

console.log(process.execPath);

console.log(process.config);

console.log(process.pid);

console.log(process.title);

console.log(process.arch);

console.log(process.memoryUsage());

console.log(process.cwd());

process.chdir('../');

console.log(process.cwd());

console.log(process.env);

//process.env.NODE_ENV = 'dev';

console.log(process.uptime());

process.on('exit',() => {
    console.log('exited');
});

//process.exit(0);

process.on('beforeExit',() => {
    console.log('before');
});

process.on('uncaughtException', error => {
    console.log(error);
    console.log('======');
    console.log('uncaughtException occurred');
})
// 测试 uncaughtException
//a

process.on('SIGINT',() => {
    console.log('received SIGINT info');
});

setTimeout(() => {
    console.log('timeout');
},10000)