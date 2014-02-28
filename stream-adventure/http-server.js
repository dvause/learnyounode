var http = require('http'),
	through = require('through'),
	port = process.argv[2];


var server = http.createServer(function(req, res) {
	if (req.method === 'POST') {
		req.pipe(through(function(buf) {
			this.queue(buf.toString().toUpperCase());
		})).pipe(res);
	} else {
		res.end('not a post\n')
	}
});
server.listen(port);