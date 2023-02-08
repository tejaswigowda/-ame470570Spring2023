var mongo = require('mongoskin');
var db = mongo.db("mongodb://44.203.237.16:27017/test");

var express = require("express");
var server = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var hostname = process.env.HOSTNAME || 'localhost';
var port = 1234;



server.get("/add", function (req, res) {
  console.log(req.query);
    var a = parseFloat(req.query.a);
    var b = parseFloat(req.query.b);
    res.send((a+b).toString()); // send response body
});

server.get("/sub", function (req, res) {
  console.log(req.query);
    var a = parseFloat(req.query.a);
    var b = parseFloat(req.query.b);
    res.send((a-b).toString()); // send response body
});

server.get("/mul", function (req, res) {
  console.log(req.query);
    var a = parseFloat(req.query.a);
    var b = parseFloat(req.query.b);
    res.send((a*b).toString()); // send response body
});

server.get("/div", function (req, res) {
  console.log(req.query);
    var a = parseFloat(req.query.a);
    var b = parseFloat(req.query.b);
    res.send((a/b).toString()); // send response body
});

server.get("/mod", function (req, res) {
  console.log(req.query);
    var a = parseFloat(req.query.a);
    var b = parseFloat(req.query.b);
    res.send((a%b).toString()); // send response body
});


server.get("/pow", function (req, res) {
  console.log(req.query);
    var a = parseFloat(req.query.a);
    var b = parseFloat(req.query.b);
    res.send((a**b).toString()); // send response body
});

server.use(methodOverride());
server.use(bodyParser());
server.use(errorHandler());
server.use(express.static(__dirname + '/public'));

console.log("Simple static server listening at http://" + hostname + ":" + port);
server.listen(port);
