
exports.up = function (knex, Promise) {
    return knex.schema.createTable("populations", table => {
        table.increments("id");
        table.integer("year");
        table.integer("quantity");
        table.integer("country_id").
            references("countries.id");
            // table.integer("country_id")
            // .references("id")
            // .inTable("countries");

    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable("populations");

};
