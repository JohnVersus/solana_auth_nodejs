const express = require("express");
const app = express();
app.listen(8000);
app.use(express.json());

const { readFile } = require("fs").promises;

app.get("/", async (req, res) => {
  res.send(await readFile("./index.html", "utf8"));
});
