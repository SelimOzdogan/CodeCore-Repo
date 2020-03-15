
function reverse(str){
    let revstr=[];
    for(let value of str.split('')){
        revstr.unshift(value);
    }
    console.log(revstr.join(''));
}

reverse(process.argv[2])
