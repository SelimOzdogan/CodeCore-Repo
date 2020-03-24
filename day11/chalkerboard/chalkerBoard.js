const chalk = require("chalk");
const log = console.log;

const unicode='\u2588';
color = process.argv[2];
width = process.argv[3];
height = process.argv[4];

let str = "";
let toggle = false;
for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    if (toggle) {
      str += chalk.keyword(color)(unicode);
    } else {
      str += " ";
    }
    toggle = !toggle;
  }
  toggle = !toggle;
  str +='\n';
}

log(str);

//node chalkerBoard.js blue 20 8 
//node chalkerBoard.js red 20 8 