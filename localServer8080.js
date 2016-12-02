//this is the EXPRESS part of it all
//you merged two documents - see if it still makes sense
//https://codeforgeek.com/2015/01/render-html-file-expressjs/

// var http    = require("http");
var express = require("express");

//     ERROR
//     it cannot find module "express"
//     do I need the entry point (index.js)?
//     that's what I saved while installing express

var app     = express();
var path    = require("path");
// var port    = 8080;
// var server  = http.createServer(requestHandler);

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/contacts',function(req,res){
  res.sendFile(path.join(__dirname+'/addressBook.html'));
});

app.get('/new',function(req,res){
  res.sendFile(path.join(__dirname+'/new.html'));
});

app.get('/edit',function(req,res){
  res.sendFile(path.join(__dirname+'/edit.html'));
});

app.listen(8080);

console.log("Running at Port 8080");

//---------------------------------------------------

// a function which handles requests and sends response

// function requestHandler(req, res) {
//   if (request.url == "/") {
//     response.end("Welcome!");
//   } else if (request.url == "/urls") {
//     response.end("www.lighthouselabs.ca\nwww.google.com");
//   } else if (request.url == "/addressBook") {
//     response.end("addressBook.html");
//   } else {
//     response.statusCode = 404;
//     response.end("404 error");
//   }
// }

// server.listen(PORT, () => {
//   console.log(`Server listening on: http://localhost:${PORT}`);
// });

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