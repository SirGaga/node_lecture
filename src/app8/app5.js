[1,2,3,4,5].forEach(e => {
    console.log(e);
});

process.on('message',message => {
    console.log(message);
    process.send('welcome');
})