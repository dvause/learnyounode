var filteredls = require('./filteredlsModule.js');
var args = process.argv;

filteredls(args[2], args[3], function(err, files) {
	if (err) {
		return console.error("error: " + err);
	}

  files.forEach(function (file) {
    console.log(file);
  });
});

