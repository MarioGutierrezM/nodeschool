var num = 0;
var res = 0;

for (var x=2; x<process.argv.length; x++){
    num = Number(process.argv[x]);
    res = res + num;
}

console.log(res);

