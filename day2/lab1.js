let arg1 = parseInt(process.argv[2]);
let arg2 = parseInt(process.argv[3]);
let arg3 = parseInt(process.argv[4]);

//console.log(` ${arg1} ${arg2} ${arg3}`);
if(isNaN(arg1) && isNaN(arg2) && isNaN(arg3)){
    console.log(`in`);
    if(arg1 >= arg2 && arg1 >= arg3){
        console.log(`the largest number is ${arg1}`);
    }
    else if(arg2 >= arg3 && arg2 >= arg1){
    console.log(`the largest number is ${arg2}`);
    }
    else if(arg3 >= arg2 && arg3 >= arg1){
    console.log(`the largest number is ${arg3}`);
    }
}
else{
    console.log(`you need to enter 3 args`);
}

//console.log(` ${arg1} ${arg2} ${arg3}`);
