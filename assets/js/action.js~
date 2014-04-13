var urlLink = '192.168.1.4:5000';
var socket = io.connect(urlLink);

function forward() {
  socket.emit('client', "forward");
  socket.emit('test', "forward");
}
function backward() {
  socket.emit('client', "backward");
  socket.emit('test', "backward");
}
function left() {
  socket.emit('client', "left");
  socket.emit('test', "left");
}
function right() {
  socket.emit('client', "right");
  socket.emit('test', "right");
}
function stop() {
  socket.emit('client', "stop");
  socket.emit('test', "stop");
}