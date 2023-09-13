const express = require("express");
const { getBooks } = require("./service/index");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

app.get("/books", async (req, res) => {
  const books = await getBooks();
  return res.status(200).json(books);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
