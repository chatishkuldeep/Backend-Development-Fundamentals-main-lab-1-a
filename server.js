const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.get("/about", (request, response) => {
  response.json({
    name: "MOGALIPURI CHATISH KULDEEP",
    section: "CSE(AIDE)-2B-313"
  });
});

app.get("/time", (request, response) => {
  response.send(new Date().toString());
});

app.use((request, response) => {
  response.status(404).send("404 - Page Not Found");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});