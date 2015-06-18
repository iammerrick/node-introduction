var http = require('http');

function onRequest(req, res) {
  res.writeHead(200, 'Totes OK', {
    'Content-Type': 'text/html'
  });
	res.end('<h1>Hello world!</h1>');
}

http.createServer(onRequest).listen(1337);
