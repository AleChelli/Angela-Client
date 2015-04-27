var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var sys = require('sys')
var exec = require('child_process').exec;


function puts(error, stdout, stderr) { sys.puts(stdout) }

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(cmd){
  socket.on('angela.command', function(cmd){
    exec(cmd, puts);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
