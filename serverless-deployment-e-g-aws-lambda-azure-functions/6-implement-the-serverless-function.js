// handler.js
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from serverless!');
});

module.exports = app;
