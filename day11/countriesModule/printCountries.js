const countries = require('./countries.js');

console.log("I want to visit: ");
for (let country of countries) {
  console.log(` - ${country}`);
}