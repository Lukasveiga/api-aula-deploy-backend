const knex = require("../database/connect");

const getBooks = async () => {
  const books = await knex("books");
  return books;
};

module.exports = { getBooks };
