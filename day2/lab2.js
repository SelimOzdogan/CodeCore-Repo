let Input = process.argv.slice(2);
let str='';

for(let i = 0 ; i < Input.length; i++){
    for(let x = 0 ; x< Input[i].length ;x++){
        str += (x % 2 == 0 ? Input[i][x].toLowerCase() : Input[i][x].toUpperCase());
    }
   str +=' ';
}

 console.log(str);

