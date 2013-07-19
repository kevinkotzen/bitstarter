var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var filename = "index.html";
var fileread = fs.readFileSync(filename, "utf8");



app.get('/', function(request, response) {
  response.send(fileread));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
