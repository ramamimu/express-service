const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

app.get("/ping", (request, response) => {
  response.send("pong");
});

app.get("/hello", (request, response) => {
  response.send("hello CC-51 :'D");
});
