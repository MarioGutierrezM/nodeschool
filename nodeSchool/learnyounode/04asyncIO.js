var fs = require('fs');

var datos = process.argv[2];

fs.readFile(datos, (err, data) => {
    var str = data.toString();
    var str2 = str.split('\n').length - 1;
    return console.log(str2);
});

