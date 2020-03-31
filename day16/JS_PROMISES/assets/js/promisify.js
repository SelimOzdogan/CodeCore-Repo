const fs = require("fs");

function writeFile(filename, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, content, (err, filename) => {
      if (err) {
        reject(err);
        // throw new Error(err);
      } else {
        resolve(filename);
      }
    });
  });
}

writeFile("file.txt", "The contents of my file")
  .then(function () { console.log("File write complete!") })
  .catch(function (error) { console.error(error) });
