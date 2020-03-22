let Input = process.argv[2];
let    str='';
for(let i = 0 ; i < Input.length; i++){
    str += (i === 0 || Input[i-1] == ' ' ? Input[i].toLowerCase() : Input[i].toUpperCase());
}

 console.log(str);

