var 
  serialport = require("serialport"),
  SerialPort = serialport.SerialPort, // localize object constructor
  fs = require('fs');

//SERIAL
var portName = '/dev/ttyACM0';
var serial = new SerialPort(portName, {
   baudRate: 9600,
   dataBits: 8, 
   parity: 'none', 
   stopBits: 1, 
   flowControl: false 
});

function serial_start() {
  serial.on("open", function () {
      console.log('open serial communication');
    });
}

serial_start();

function forward() {
  serial.write('f');
}

function backward() {
  serial.write('b');
}
function left() {
  serial.write('l');
}

function right() {
  serial.write('r');
}
function stop() {
  serial.write('s');
}

/*
var socketIO = require('socket.io-client');
var socket = socketIO.connect('http://nodeplayscar.herokuapp.com/');
  socket.on('hello', function(){ 
    socket.emit('car');
    console.log("emitted car"); */
    
io.sockets.on('connection', function (socket) { 
  socket.on('switch', function(state) {
    if (state == "forward"){
      forward();
    }
    if (state == "backward") {
      backward();
    }
     if (state == "left"){
      left();
    }
    if (state == "right") {
      right();
    }
     if (state == "stop"){
      stop();
    }
  });
  socket.on('test', function(data) {
    console.log(data);
  });
});
