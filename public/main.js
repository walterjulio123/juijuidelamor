
var socket = io.connect();
/*
socket.on('messages', function(data) {  
  console.log(data);
});
*/
socket.on('update-status', function(data) {  
  $('#panelito').removeClass('hidden');
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
