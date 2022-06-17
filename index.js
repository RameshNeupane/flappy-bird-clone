const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const favicon = require("serve-favicon");

app.use(express.static("public"));
app.use(favicon(path.join(__dirname, "public", "static", "favicon.ico")));

app.get("/", (reqeuest, response) => {
  response.sendFile(path.join(__dirname, "public", "static", "index.html"));
});

app.listen(PORT, () => {
  console.log(`app is listening at localhost:${PORT} ...........`);
});
