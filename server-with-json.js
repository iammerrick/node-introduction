var http = require('http');

function onRequest(req, res) {
  res.writeHead(200, 'Totes OK', {
    'Content-Type': 'application/json'
  });
	res.end(JSON.stringify({ hello: 'World!'}));
}

http.createServer(onRequest).listen(1337);
