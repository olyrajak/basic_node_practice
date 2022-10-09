var http = require('http');
http.createServer((request, response) => {
    console.log(request, response);
    // response.StatusCode = 200;
    // response.setHeader = ('content-type', 'text/html');
    response.writeHead(200, { 'content-type': 'text/html' });
    response.write("Hello");
    response.write("Hi");
    response.end("<h1>Welcome</h1>");
    // cc
}).listen(3000, 'localhost');

// var server = http.createServer(handlerRequest);

// function handlerRequest(req, res) {
//     // console.log(req.method, req.url);
//     res.StatusCode = 200;
//     console.log(req.headers);
//     res.end("Welcome Node");
// }
// server.listen(900, () => {
//     console.log("Server is listen on port 900");
// });