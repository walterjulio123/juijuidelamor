//Creamos archivo server.js para poner el codigo del servidor:
var express = require('express');
var app = express();
var server = require('http').createserver(app);  
var io = require('socket.io').listen(server);
//var port = process.env.PORT || 3000;
var users = [];
var connections = [];

server.listen(process.env.PORT || 3000);
console.log('Server is running...');

app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
});
/*
app.get('/', function (req, res) {
    res.send("Juijui del amorrrr y la felicidaaaaad en juijuidelamor V3.1!");
});

var server = app.listen(port, function () {
    console.log('node server is just fine! and running on port - ' + port);
});
*/