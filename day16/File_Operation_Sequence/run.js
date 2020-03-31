// run.js file
const utils = require("./solution.js");
const pathToDir = "./files";
utils
  .readdir(pathToDir)
  .then(fileNames =>
    Promise.all(
      fileNames.map(fileName =>
        utils.readFile(`${pathToDir}/${fileName}`, "utf8")
      )
    )
  )
  .then(filesContents => utils.writeFile("file.txt", filesContents.join("\n")))
  .then(() => console.log("Wrote to file: file.txt"))
  .catch(console.error);
