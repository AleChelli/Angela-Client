var app = require('express')();
var http = require('http').Server(app);
var socket = require('socket.io-client')('http://apio04.cloudapp.net');

var sys = require('sys')
var exec = require('child_process').exec;


function puts(error, stdout, stderr) { sys.puts(stdout) }

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

socket.on('connect', function(){
	console.log("Connected")
	socket.on('angela.client.command', function(cmd){
	console.log("Il cloud mi ha mandato ",cmd)
	exec(cmd.cmd, puts);
});
});
socket.on('angela.client.command', function(cmd){
	console.log("Il cloud mi ha mandato ",cmd)
	exec(cmd.cmd, puts);
});
socket.on('disconnect', function(){
	console.log("disconnect")
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
