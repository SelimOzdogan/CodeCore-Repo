const fs = require("fs");

function writeFile(filename, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, content, (err, filename) => {
            if (err) {
                reject(err);
            } else {
                resolve(filename);
            }
        });
    });
}
function readFile(filename, content = '') {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, content, (err, content) => {
            if (err) {
                reject(err);
            } else {
                resolve(content.toString());
            }
        });
    });
}
function readDir(path, options) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, options, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(options);
            }
        });
    });
}

readDir("./files", { encoding: "utf-8" })
    .then(files => {
        let data = '';
        for (let i = 0; i < files.length; i++) {
            readFile('./files/' + files[i])
                .then(function (resolve) {
                    data += resolve + '\n';
                })
                .catch(function (error) { console.error(error) });
        }
    })
    .then(data => {
        writeFile("file.txt", data)
            .then(function () { console.log("File write complete!") })
            .catch(function (error) { console.error(error) });
    })
    .catch(err => { console.error("this is the catch block: ", err); });


