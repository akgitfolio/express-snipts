const express = require('express');
const https = require('https');

const app = express();
const server = https.createServer(app);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

server.listen(443);
