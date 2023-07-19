const https = require('https');
const fs = require('fs');

const privateKey = fs.readFileSync('/path/to/privatekey.pem');
const certificate = fs.readFileSync('/path/to/certificate.pem');

const server = https.createServer({
  key: privateKey,
  cert: certificate
}, app);

server.listen(443);
