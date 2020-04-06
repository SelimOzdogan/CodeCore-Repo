const express = require('express');

const logger = require('morgan');
const app = express();

app.set("view engine", "ejs");

app.use(logger("dev"));

app.get("/", (request, response) => {
    response.send("welcome");
});

app.get("/car_status", (request, response) => {
    console.log("URL query: ", request.query);
    response.render("carStatus");
});

app.get("/result", (request, response) => {
    const { year } = request.query;

    response.render("result", {
        year
    });
});

app.get("/random_person", (request, response) => {
    let { names } = request.query;
    names = names.split(',');
    let person ;
    if (names)
        person = names[Math.floor(Math.random() * names.length)];
    // person = people[Math.floor(Math.random()) * people.length];
    // selim, ahmet
console.log(names);
console.log(names.length)
console.log(names[0])
console.log(names[1])
console.log(person);


    response.render("randomPerson", { person });
});

const PORT = 3001;
const ADDRESS = "localhost";

app.listen(PORT, ADDRESS, () => {
    console.log(`Server listening on http://${ADDRESS}:${PORT}`);
})
