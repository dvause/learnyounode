var fs = require('fs'),
  path = require('path'),
  dir = process.argv[2],
  filter = process.argv[3];

fs.readdir(dir, function(err, files) {
  for (var i = 0; i < files.length; i++) {
    if (path.extname(files[i]).substr(1) === filter) {
      console.log(files[i]);
    }
  }
});
