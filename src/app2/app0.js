/**
 *
 * node操作文件系统是通过一个重要的原生模块来实现的：fs
 * 对于fs中的绝大多数api来说，Node都提供了相同功能的两个版本：同步版本和异步版本
 *
 */

const fs = require('fs');

try {
    const data = fs.readFileSync('test.txt','utf-8');
    console.log(data);
} catch (e){
    console.log(e);
}

fs.readFile('test.txt','utf-8',function (error,data){
    if(error){
        console.log('error occurred:'+error);
    } else {
        console.log(data);
    }
})

fs.writeFile('mytest2.txt','hello,node.js',error =>{
    if (error){
        console.log(error);
    } else {
        console.log('write file succeed')
    }
})

fs.writeFile('mytest2.txt','mytest2,node.js\r\n',{flag:'a'},err => {
    if (error){
        console.log(error);
    } else {
        console.log('write file succeed')
    }
})