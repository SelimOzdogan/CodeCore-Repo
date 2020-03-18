let args = process.argv.slice(2);
args[0] = parseInt(args[0]);
if (args == undefined || isNaN(args) || args.length < 1) {
    console.log('A number argument is required');
    return;
}

/*----------*/
const num = args[0];
let out = '';
let f0 = 0, f1 = 1, tmp;
out += f1 + ' ';
for (let i = 0; i < num-1; i++) {
    out += parseInt((f0) + (f1)) + ' ';
    tmp = f0;
    f0 = f1;
    f1 = tmp + f1;
}

/*--------------*/

console.log(out);