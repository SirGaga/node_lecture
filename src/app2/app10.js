const fs = require('fs');

fs.realpath('app0.js',(err, resolvedPath) => {
    if (err){
        throw err;
    }
    console.info(resolvedPath);
})