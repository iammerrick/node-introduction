var http = require('http');
var fs = require('fs');

function onRequest(req, res) {
  var img = fs.readFileSync('./celebrate.gif');
  res.writeHead(200, {'Content-Type': 'image/gif' });
  res.end(img, 'binary'); // Different encoding
}

http.createServer(onRequest).listen(1337);
