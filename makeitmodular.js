var filteredls = require('./filteredlsModule.js');
var args = process.argv;

filteredls(args[2], args[3], function(err, files) {
  files.forEach(function (file) {
    console.log(file);
  });
});

