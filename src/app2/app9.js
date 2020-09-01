const fs = require('fs');

fs.access('app10.js',err => {
    if (err) {
        throw err
    }
    console.log('exists');
})