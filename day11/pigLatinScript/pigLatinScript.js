const fs = require("fs");

const fileNameInput = "./readFile.txt";
const fileNameOutput = "./output.txt";
const wovels = ["a", "e", "i", "o", "u"];
let output = "";

fs.readFile(fileNameInput, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  data
    .toString()
    .split("\n")
    .forEach(word => {
      let converted = "";
      word = word.split("");
      if (wovels.includes(word[0])) {
        converted = word.join("") + "ay";
      } else {
        converted = word.slice(1, word.length).join("") + word.slice(0, 1) + "ay";
      }
      output += `${word.join("")} = ${converted}\n`;
    });
  fs.writeFile(fileNameOutput, output, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('File created');
  });
});


