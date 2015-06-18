var http = require('http');

function onRequest(req, res) {
	res.end('Hello world!');
}

http.createServer(onRequest).listen(1337);
