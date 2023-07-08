const express = require('express');
const http2 = require('http2');
const fs = require('fs');

const app = express();

const privateKey = fs.readFileSync('./private.key');
const certificate = fs.readFileSync('./certificate.crt');

const options = {
  key: privateKey,
  cert: certificate,
  allowHTTP1: true, // Allow HTTP/1.1 fallback for clients that don't support HTTP/2
};

const server = http2.createSecureServer(options, app);
server.listen(443);
