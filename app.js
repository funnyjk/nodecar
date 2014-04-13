var 
  express = require('express'),
  app = express(),
  port  = 5000;
  server = require('http').createServer(app);
  
app.configure(function(){
  app.use(express.static(__dirname + '/public'));
  app.use(express.static(__dirname + '/assets'));
});


app.get('/', function(req, res){
  res.sendfile(__dirname + '/client.html');
});

server.listen(port);
