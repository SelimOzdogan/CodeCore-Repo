const express = require('express');


const app = express();

// app.get("/", (request, response) => {
//     response.send("Hello, World");
// });
app.get("/hello_world", (request, response) => {
    response.send("Hello, World");
});

const PORT = 3000;
const ADDRESS = "localhost";

app.listen(PORT, ADDRESS, () => {
    console.log(`Server listening on http://${ADDRESS}:${PORT}`); 
})
