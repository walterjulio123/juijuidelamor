//Creamos archivo server.js para poner el codigo del servidor:
var express = require('express');
var app = express();
//var server = require('http').createserver(app);  
var server = require('http').Server(app); 
var io = require('socket.io').listen(server);
var port = process.env.PORT || 3000;
var users = [];
var connections = [];
var messages = [{  
  //id: 1,
  text: "Hola soy un mensaje",
  author: "Carlos Azaustre"
}];

app.use(express.static('public'));
app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {  

  console.log('Alguien se ha conectado con Sockets');
  socket.emit('messages', messages);

  socket.on('new-message', function(data) {
    messages.push(data);
    io.sockets.emit('messages', messages);
  });

  socket.on('new-status', function(data) {
    console.log(data);
    io.sockets.emit('update-status', data);    
      //Mensaje al Rasperrito
    io.sockets.emit('server-message', data); 
  });  

  socket.on('control-message', function(data) {
    console.log('control-message: '+ data);  
  });   

});

server.listen(port, function() {  
  console.log("Servidor corriendo en " + port);
});
