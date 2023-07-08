const express = require('express');
const fs = require('fs');

const app = express();

const privateKey = fs.readFileSync('./private.key');
const certificate = fs.readFileSync('./certificate.crt');

app.use(require('express-https-redirect')());

const options = {
  key: privateKey,
  cert: certificate,
};

const httpsServer = require('https').createServer(options, app);
httpsServer.listen(443);
