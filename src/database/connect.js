require("dotenv").config();

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const knex = require("knex")({
  client: "pg",
  connection: {
    host: DB_HOST ?? "localhost",
    port: DB_PORT ?? 5432,
    user: DB_USER ?? "postgres",
    password: DB_PASSWORD ?? "postgres",
    database: DB_NAME ?? "default_db",
  },
});

module.exports = knex;
