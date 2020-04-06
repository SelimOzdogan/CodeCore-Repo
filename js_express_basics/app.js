const express = require('express');

const logger = require('morgan');
const app = express();

app.set("view engine", "ejs");

app.use(logger("dev"));

app.get("/hello_world", (request, response) => {
    response.send("Hello, World");
});
app.get("/", (request, response) => {
    response.render("welcome");
});

app.get("/contact_us", (request, response) => {
    console.log("URL query: ", request.query);
    response.render("contactUs");
});
app.get("/thank_you", (request, response) => {
    //console.log("request.query: ", request.query);

    // const fullName = request.query.fullName;
    // const favouriteColour = request.query.favouriteColour;
    // const message = request.query.message;
    // below line is equivalent to the above three lines
    const { fullName, favouriteColour, message } = request.query;
    //   response.render("thankYou", {
    //     fullName: fullName,
    //     favouriteColour: favouriteColour,
    //     message: message
    //   });

    // When the objects key and value are the same, you can just type key
    response.render("thankYou", {
        fullName,
        favouriteColour,
        message
    });
});

const PORT = 3000;
const ADDRESS = "localhost";

app.listen(PORT, ADDRESS, () => {
    console.log(`Server listening on http://${ADDRESS}:${PORT}`);
})
