const knex = require("./connection");

// Find all countries whose names begin with "b" ignoring case.
const query1 = knex("countries")
    .where("title", "ilike", "b%")
    .select("*");

query1.then(data => {
    console.table(data);
});

// Count how many countries have "central" in their name.
const query2 = knex("countries")
    .where("title", "ilike", "%central%")
    .count("*");

query2.then(data => {
    console.table(data);
});

// Find all countries whose names begin with the same three letters as their code ignoring case
const query3 = knex("countries")
    //.where("title", "ilike", knex.ref('code').concat('%') )
    //knex.istartswith(<field>, <value>)
    .whereRaw('"title" ilike "code"+%')
    .select("*");
console.log(query3.toString());
query3.then(data => {
    console.table(data);
    knex.destroy();
});