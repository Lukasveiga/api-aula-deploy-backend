const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

app.get("/", async (req, res) => {
  return res.json("API está ok!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
