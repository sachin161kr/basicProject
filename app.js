const express = require("express");
const path = require("path");
const app = express();

const port = 80;

app.use(express.static(__dirname)); // middleware

app.get("/about", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
