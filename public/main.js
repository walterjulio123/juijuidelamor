//var socket = io.connect('http://192.168.1.39:3000', { 'forceNew': true });
$( document ).ready(function() {
  //$('.checkbox').on('change',newStatus());
  $(document).on('change', '.checkbox', function() {
    //event.preventDefault();
    //alert(this.checked);
    //var valor = this.checked;
    //newStatus(valor);
    newStatus(this);
  });
});

var socket = io.connect();

socket.on('messages', function(data) {  
  console.log(data);
});

socket.on('update-status', function(data) {  
  $(document).off('change');
  console.log(data);
   var updateEstado = (data==true?true:false);
  $('#chk01'). prop('checked', updateEstado).change();
  $(document).on('change', '.checkbox', function() {
    newStatus(this);
  });
});
function addMessage(e) {  
  var message = {
    author: document.getElementById('username').value,
    text: document.getElementById('texto').value
  };

  socket.emit('new-message', message);
  return false;
};
function newStatus(e) {   
  var estado = e.checked;
  socket.emit('new-status', estado);  
}
