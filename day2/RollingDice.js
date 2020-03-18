let num = parseInt(process.argv[2]);
let num1 = parseInt(process.argv[3]);

let sum=0;

for(let i=0 ; i<num ; i++){
    var rolled = Math.floor((Math.random()* num1) + 1);
    sum += rolled;
    console.log(`Rolled: ${rolled}`);
}

console.log(`-------------------------`);
console.log(`Average Roll: ${sum/num}`);
console.log(`Total: ${sum}`);