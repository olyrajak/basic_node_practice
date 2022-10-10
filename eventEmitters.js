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
var qs = require('querystring');

function handlerRequest(req, res) {
    var dataFormat = req.headers['content-type'];
    var store = '';
    req.on('data', (chunk) => {
        store = store + chunk;
    });
    req.on('end', () => {
        if (dataFormat === 'application/json') {
            var parseData = JSON.parse(store);
            res.end(store);
        }
        if (dataFormat === 'application/x-www-form-urlencoded') {
            var parseData = qs.parse(store);
            res.end(JSON.stringify(parseData));
        }
        console.log(store, dataFormat);

    });
}
server.listen(3533, () => {
    console.log("Server is listen on port 3533");
});