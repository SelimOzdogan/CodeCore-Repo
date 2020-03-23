const fs = require("fs");

const fileNameMarked = process.argv[2];
const fileNameDeleted = process.argv[3];

let x = 0;

fs.readFile(fileNameMarked, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  dataRows = data.toString().split("\n");
  let output = "";
  for (let i = 0; i < dataRows.length; i++) {
    if (i === 0 || dataRows[i].split(",")[2] === "no")
      output += dataRows[i] + "\n";
  }

  fs.writeFile(`${fileNameDeleted}`, output, err => {
    if (err) {
      console.error(err);
      return;
    }
  });
});
