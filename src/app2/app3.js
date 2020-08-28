const fs = require('fs');

fs.unlink('mytest2.txt',err => {
    if (err) {
        //return console.error(err);
        throw err;
    }
    console.log('file deleted');
})