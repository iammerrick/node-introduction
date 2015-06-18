var http = require('http');

function onRequest(req, res) {
  res.writeHead(200, 'Totes OK', {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });
	res.end(JSON.stringify({ hello: 'World!'}));
}

http.createServer(onRequest).listen(1337);
