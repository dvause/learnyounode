var net = require('net')
  port = process.argv[2];

function now() {
  var date = new Date();
  return date.getFullYear() + '-' +
    zeroFill(date.getMonth() + 1) +
    '-' + zeroFill(date.getDate()) +
    ' ' + zeroFill(date.getHours()) +
    ':' + zeroFill(date.getMinutes()) + '\n';
}

function zeroFill(n){
  return n < 10 ? '0' + n : n;
}

var server = net.createServer(function (socket) {
  socket.end(now());
});
server.listen(port);
