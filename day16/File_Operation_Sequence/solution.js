// create three helper methods (readdir, readFile, writeFile)
const fs = require("fs");
const utils = {
  readdir(...args) {
    return new Promise((resolve, reject) => {
      fs.readdir(...args, (err, data) => {
        if (err) return reject(err);
        resolve(data);
      });
    });
  },
  readFile(...args) {
    return new Promise((resolve, reject) => {
      fs.readFile(...args, (err, data) => {
        if (err) return reject(err);
        resolve(data);
      });
    });
  },
  writeFile(...args) {
    return new Promise((resolve, reject) => {
      fs.writeFile(...args, err => {
        if (err) return reject(err);
        resolve();
      });
    });
  }
};
module.exports = utils;