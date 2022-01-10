const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).send();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/login.html"));
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("User logged in!");
});

app.get("/signup", (req, res) => {
  console.log(req.query);
  res.send("User signed up!");
});

app.get("/search", (req, res) => {
  console.log(req.query);
  res.sendFile(path.join(__dirname, req.query.file));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
