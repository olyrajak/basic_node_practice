var os = require('os');
var path = require('path');
var freeM = os.freemem();
var cpu = os.cpus().length;
var fs = require('fs');
var url = require('url');

var filepath = path.join(__dirname, 'file.md');

console.log(freeM, cpu);

fs.readFile('file.md', (err, content) => {
    
    console.log(err, content.toString);
    
});

fs.readFile('file.md', (err, msg) => {
    
    console.log(err, msg.toString);
    
});


let fileDatas = fs.readFileSync("file.md");



console.log(fileDatas);

let buff1 = Buffer.alloc(10);

console.log(buff1);

buff1.write("Welcome to Buffer");

console.log(buff1);

console.log(buff1.toString());
var math = require('./math');

console.log(math.sum(3, 5));
console.log(math.square(3));



var urlstring = "https://altcampus.school/students/register?verified=false";



var parseUrl = url.parse(urlstring);



console.log(parseUrl);
