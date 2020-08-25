const path = require("path");
const filePath = 'D:/users/helloworld/node/test.js';

const obj = path.parse(filePath);

console.info(obj);