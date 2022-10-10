var { EventEmitter } = require('events');

var myEmitter = new EventEmitter();
myEmitter.on('notice', (msg) => {
    console.log("Event Emited" + msg);
});
myEmitter.on('notice', () => {
    console.log("Event Emited 2");
});
myEmitter.emit('notice', 'Hello World');
myEmitter.emit('notice');