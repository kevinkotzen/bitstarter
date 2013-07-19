var express = require('express');

var app = express.createServer(express.logger());

//var fs = require('fs');
//var filename = "index.html";
//var fileread = fs.readFileSync(filename).toString();
//var fileread = "Hello World !!!";


app.get('/', function(request, response) {
  response.send("Hello World !!!!!"));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
