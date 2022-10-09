var http = require('http');
var url = require('url');
var fs = require('fs');
// http.createServer((request, response) => {
//     console.log(request, response);
//     // response.StatusCode = 200;
//     // response.setHeader = ('content-type', 'text/html');
//     response.writeHead(200, { 'content-type': 'text/html' });
//     response.write("Hello");
//     response.write("Hi");
//     response.end("<h1>Welcome</h1>");
//     // cc
// }).listen(3000, 'localhost');

var server = http.createServer(handlerRequest);

function handlerRequest(req, res) {
    var parseurl = url.parse(req.url);
    var pathurl = parseurl.pathname;
    console.log(parseurl);
    console.log(req.method, req.url, parseurl.pathname);
    if (req.method === 'GET' && req.url === '/') {
        res.write("Welcome To Index Page");
        res.end();
    } else if (req.method === 'GET' && pathurl === '/about') {
        res.setHeader('content-type', 'text/html');
        fs.createReadStream('./about.html').pipe(res);
        // fs.readFile('./about.html', (err, content) => {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         res.end(content);
        //         console.log(content);


        //     }

        // });
    } else if (req.method === 'GET' && pathurl === '/users') {
        res.setHeader('content-type', 'text/html');
        res.end('</h1>Get user page</h1>');
    } else if (req.method === 'POST' && pathurl === '/users') {
        res.setHeader('content-type', 'text/html');
        res.end('</h1>Post user page</h1>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('</h1>Page Not Found</h1>');
    }
    // res.StatusCode = 200;
    // console.log(req.headers);
    // res.end("Welcome Node");
}
server.listen(3000, () => {
    console.log("Server is listen on port 3000");
});