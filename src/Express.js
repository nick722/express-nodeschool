const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "templates"));

app.use("/home", (req, res) => {
  res.render(process.argv[3], { date: new Date().toDateString() });
});

app.listen(process.argv[2]);
