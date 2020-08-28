const fs = require('fs');

fs.open('test.txt','r+',((err, fd) => {
    if (err){
        return console.error(err);
    }
    console.log('file is open');
}))