let num = parseInt(process.argv[2]);

let str = ''; 
for(let i=0 ; i<num ; i++ )
{
    let x=(Math.floor((num-i) / 2));
    str += ' '.repeat(x) + '#'.repeat(i+1)+'\n';
}

console.log(str);
