var urlLink = '192.168.1.4:5000';
var socket = io.connect(urlLink);

function forward() {
  socket.emit('switch', "forward");
  socket.emit('test', "forward");
}
function backward() {
  socket.emit('switch', "backward");
  socket.emit('test', "backward");
}
function left() {
  socket.emit('switch', "left");
  socket.emit('test', "left");
}
function right() {
  socket.emit('switch', "right");
  socket.emit('test', "right");
}
function stop() {
  socket.emit('switch', "stop");
  socket.emit('test', "stop");
}