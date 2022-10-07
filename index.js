var os = require('os');
var path = require('path');
var freeM = os.freemem();
var cpu = os.cpus().length;
var fs = require('fs');
var filepath = path.join(__dirname, 'file.md');
// console.log(freeM, cpu);
// fs.readFile('file.md', (err, content) => {
//     console.log(err, content.toString);
// });
var math = require('./math');
console.log(math.sum(3, 5));
console.log(math.square(3));