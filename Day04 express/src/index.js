const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
// middlewares
app.use(
  (request, response, next) => {
    console.log(request.url);
    console.log(JSON.stringify(request.body));
    next();
  }
);

// handlers
app.get("/", (request, response) => {
  response.setHeader("content-type","text/html");
  response.send('<h1>Hello</h1>');
});

app.post("/student", (request, response) => {
  const {name, age} = request.body;
  response.send({
    name: `${name}`,
    age: `${age}`,
    address: "Colombo",
  });
});

app.put("/student", (request, response) => {
    response.send({
      name: "Nilana",
      age: 21,
      address: "Kandy",
    });
  });

app.listen(PORT, () => {
  console.log(`Server Started on ${PORT}`);
});
