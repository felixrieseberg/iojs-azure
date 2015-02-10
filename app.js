const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(`Hello World from iojs ${process.version}!\n`);
}).listen(process.env.port);