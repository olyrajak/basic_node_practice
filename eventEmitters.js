// var { EventEmitter } = require('events');
var http = require('http');
// var url = require('url');
// var fs = require('fs');
// var myEmitter = new EventEmitter();
// myEmitter.on('notice', (msg) => {
//     console.log("Event Emited" + msg);
// });
// myEmitter.on('notice', () => {
//     console.log("Event Emited 2");
// });
// myEmitter.emit('notice', 'Hello World');
// myEmitter.emit('notice');





var server = http.createServer(handlerRequest);

function handlerRequest(req, res) {
    var store = '';
    req.on('data', (chunk) => {
        store = store + chunk;
    });
    req.on('end', () => {
        console.log(store);

    });
}
server.listen(3333, () => {
    console.log("Server is listen on port 3333");
});