var spawn = require('child_process').spawn,
	duplex = require('duplexer');

module.exports = function(cmd, args) {
	var c = spawn(cmd, args);
	return duplex(c.stdin, c.stdout);
}
