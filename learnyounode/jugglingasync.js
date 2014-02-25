var http = require('http'),
  bl = require('bl'),
  results = [],
  count = 0;


function get(index) {
  var url = process.argv[index + 2];
  http.get(url, function callback(response) {
    response.pipe(bl(function(err, data) {
      if (err) {
        console.error(err);
      }
      results[index] = data.toString();
      count++;
      if (count == 3) {
        logResult();
      }
    }));
  });
}

function logResult() {
  results.forEach(function(r){
    console.log(r);
  })
}

for (var i = 0; i < 3; i++) {
  get(i);
}

