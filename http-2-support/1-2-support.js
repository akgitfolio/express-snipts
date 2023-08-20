const express = require('express');
const http2 = require('http2');
const app = express();

// Create an HTTP/2 server
const server = http2.createSecureServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
});

// Mount the Express app on the HTTP/2 server
server.on('stream', (stream, headers) => {
  app(stream, headers);
});

// Listen on port 443 (HTTPS)
server.listen(443);
