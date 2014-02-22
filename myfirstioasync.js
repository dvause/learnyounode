var fs = require('fs');
  file = process.argv[2];

fs.readFile(file, 'utf8', function(err, data) {
  if (err) throw err;
  var lines = data.split('\n').length - 1;
  console.log(lines);
});
