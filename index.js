var app = require('express')();
var http = require('http').Server(app);
var socket = require('socket.io-client')('http://localhost');

var sys = require('sys')
var exec = require('child_process').exec;


function puts(error, stdout, stderr) { sys.puts(stdout) }

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

socket.on('connect', function(){});
socket.on('angela.command', function(cmd){
	exec(cmd, puts);
});
socket.on('disconnect', function(){});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
