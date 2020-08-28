const fs = require('fs');

fs.open('test.txt','r+',((err, fd) => {
    if (err){
       return  console.error(err);
    }
    console.log('file is open');

    fs.close(fd,err1 => {
        if (err1){
            console.error(err1);
        }
        console.log('file is closed');
    })
}))