const buffer = Buffer.from('hello');

const myObj = {};

const str = 'aa';

const flag = true;

console.log(typeof myObj);
console.log(typeof buffer);
console.log(typeof flag);
console.log(typeof str);

console.log(Buffer.isBuffer(myObj));
console.log(Buffer.isBuffer(buffer));