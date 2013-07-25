var express = require('express');
var app = express.createServer(express.logger());

var fs = require('fs');
var fr = fs.readFileSync('index.html');
var txt = fr.toString();


//var txt = 'Helllow World 2';

app.get('/', function(request, response) {
  response.send(txt);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
