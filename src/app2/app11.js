const fs = require('fs');

fs.rmdir('mydir',{recursive: true},err => {
    if (err){
        throw err;
    }
    console.log('success');
})