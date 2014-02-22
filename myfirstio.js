var fs = require('fs');
var args = process.argv;

var buffer = fs.readFileSync(args[2]).toString();
var str = buffer.split('\n');

console.log(str.length-1);