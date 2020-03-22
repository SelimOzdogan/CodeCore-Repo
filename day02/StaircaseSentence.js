let args = process.argv.slice(2);
args[0] = (args[0]);
args[1] = parseInt(args[1]);
if (args == undefined || args.length < 1) {
    //console.log(args);
    console.log('An argument is required');
    return;
}

/*----------*/
const num = args[0];
const space = (isNaN(args[1]) ? 1 : args[1]);
let out = '';
let str = num.split(' ');
for (let i = 0; i < str.length; i++) {
    out += ' '.repeat(space * i) + str[i] + ' \n ';
}
out += '...';
/*--------------*/

console.log(out);