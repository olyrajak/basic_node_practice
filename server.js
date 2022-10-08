var http = require('http');
// http.createServer((request, response) => {
//     console.log(request, response);
//     response.end("Welcome");cc
// }).listen(3000, 'localhost');

var server = http.createServer(handlerRequest);

function handlerRequest(req, res) {
    res.end("Welcome Node");
}
server.listen(3000, () => {
    console.log("Server is listen on port 3000");
});