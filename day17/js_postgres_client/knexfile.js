// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',

    connection: {
      database: 'knex_demo'
    },

    migrations: {
      tableName: 'migrations',
directory: './db/migrations'
    },
    seeds:{
      directory: './db/seeds'
    }
  }
};
