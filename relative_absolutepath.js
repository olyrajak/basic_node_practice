var path = require('path');

var relativePath = './about.html';
var absolutePath = __dirname;
var absolutePath = path.join(__dirname, 'about.html');
console.log(absolutePath);
console.log(relativePath, absolutePath);