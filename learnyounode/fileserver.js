var http = require('http'),
	fs = require('fs'),
	port = process.argv[2],
	file = process.argv[3];

var server = http.createServer(function (request, response) {
	var stream = fs.createReadStream(file);
	stream.pipe(response);
});
server.listen(port);
