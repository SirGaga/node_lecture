const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.once('newListener',(event,listener) => {
    if (event === 'myEvent'){
        emitter.on('myEvent',() => {
            console.log('hello');
        });
    }
});

emitter.on('myEvent',() => {
    console.log('world');
});

emitter.emit('myEvent');