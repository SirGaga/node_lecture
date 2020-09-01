const fs = require('fs');

fs.mkdir('mydir',err => {
    if (err){
        throw err
    }
    console.log('success');
})

fs.mkdir('mydir/mydir2/world',{ recursive: true },err => {
    if (err){
        throw err
    }
    console.log('success');
})