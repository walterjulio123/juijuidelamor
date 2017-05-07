//Creamos archivo server.js para poner el codigo del servidor:
var express = require('express');
var app = express();
var server = require('http').Server(app);  
//var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send("Juijui del amorrrr y la felicidaaaaad en juijuidelamor V3.1!");
});

var server = app.listen(port, function () {
    console.log('node server is just fine! and running on port - ' + port);
});