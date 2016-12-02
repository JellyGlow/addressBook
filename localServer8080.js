const http = require("http");
const PORT = 8080;

const express = require("express");
const app = express();
const path = require("path");

// a function which handles requests and sends response
function requestHandler(request, response) {
  if (request.url == "/") {
    response.end("Welcome!");
  } else if (request.url == "/urls") {
    response.end("www.lighthouselabs.ca\nwww.google.com");
  } else if (request.url == "/addressBook") {
    response.end("addressBook.html");
  } else {
    response.statusCode = 404;
    response.end("404 error");
  }
}

//viewed at http://localhost:8080
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/addressBook.html"))
})

app.listen(8080);

var server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});

//hello world example from
// ----------EXPRESSJS.COM-------------
// var express = require('express')
// var app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })