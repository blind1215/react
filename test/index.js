const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hihi");
});

app.get("/main", (req, res) => {
  res.send("main입니다.");
});

app.listen(3000, () => {
  console.log("server start");
});
