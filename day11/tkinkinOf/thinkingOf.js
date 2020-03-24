const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let num = Math.ceil(Math.random() * 10);
let trynumber = 1;

var recursiveReadLine = function(msg) {
  rl.question(msg, function(number) {
    if (parseInt(num) === parseInt(number)) {
      console.log(`Guessed "${number}" correctly in ${trynumber} attempts!`);
      return rl.close();
    }
    recursiveReadLine("Nope. Try again. >", trynumber++);
  });
};

recursiveReadLine("I'm thinking of a number between 1 and 10\n >");
