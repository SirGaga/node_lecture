const buffer = Buffer.alloc(128);

const length = buffer.write('hello world','utf8');
console.log(length);