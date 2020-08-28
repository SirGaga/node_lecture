const fs = require('fs');

fs.rename('mytest2.txt','mytest2.txt',err => {
    if (err){
        throw err;
    }
    console.log('file renamed');

    fs.stat('mytest2.txt',(err1, stats) => {
        if (err1){
            throw err1;
        }
        console.log(JSON.stringify(stats))
    });
});

