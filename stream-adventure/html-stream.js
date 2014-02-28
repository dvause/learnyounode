var through = require('through'),
	trumpet = require('trumpet');

var tr = trumpet();

var stream = tr.select('.loud').createStream();

stream.pipe(through(function(buf) {
	this.queue(buf.toString().toUpperCase());
	console.log(this.queue);
})).pipe(stream);
process.stdin.pipe(tr).pipe(process.stdout);