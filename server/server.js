var express = require('express');
var app = express();

app.get("/index.html", function (req, res) {
  res.send("hello");
});

app.listen(3000, function () {
  console.log("Server running.");
});
