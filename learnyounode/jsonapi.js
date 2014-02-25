var http = require('http'),
	url = require('url'),
	port = process.argv[2];

function zeroFill(n){
	return n < 10 ? '0' + n : n;
}

function parseTime(iso) {
	var date = new Date(iso);
	var time = {
		"hour": zeroFill(date.getHours()),
		"minute": zeroFill(date.getMinutes()),
		"second": zeroFill(date.getSeconds())
	}
	return JSON.stringify(time);
}

function unixTime(iso) {
	var milliseconds = {
		"unixtime": new Date(iso).getTime()
	};
	return JSON.stringify(milliseconds);
}

var server = http.createServer(function(request, response) {
	var route = url.parse(request.url, true);
	switch(route.pathname) {
		case '/api/parsetime':
			response.writeHead(200, { 'Content-Type': 'application/json' });
			response.end(parseTime(route.query.iso));
			break;
		case '/api/unixtime':
			response.writeHead(200, { 'Content-Type': 'application/json' });
			response.end(unixTime(route.query.iso));
			break;
		default :
			response.writeHead(404);
			response.end('not found');
	}
	console.log(route);
});
server.listen(port);