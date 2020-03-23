const fs = require("fs");

const fileNameMarked = process.argv[2];
const fileNameDeleted = process.argv[3];

fs.readFile(fileNameMarked, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  let output = "";
  dataRows = data.toString().split("\n");
  for (let i = 0; i < dataRows.length; i++) {
    if (i === 0 || dataRows[i].split(",")[2].toLowerCase() === "no")
      output += dataRows[i] + "\n";
  }

  fs.writeFile(`${fileNameDeleted}`, output, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File is added');
  });
});
