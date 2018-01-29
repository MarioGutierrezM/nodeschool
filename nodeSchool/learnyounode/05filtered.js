var fs = require('fs');

var dir = process.argv[2];
var filtro = process.argv[3];

fs.readdir(dir, (err, docs) => {
	docs.forEach( doc => {
        if(filtro == doc){
            console.log(doc);
        }
    })	
});
