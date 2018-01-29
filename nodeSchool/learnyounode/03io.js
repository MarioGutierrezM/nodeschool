var fs = require('fs');

var datos = process.argv[2];
var str = fs.readFileSync(datos).toString();
var str2 = str.split('\n').length-1;
console.log(str2);
