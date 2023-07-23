// app.js
const express = require('express');
const app = express();

app.post('/your/endpoint', (req, res) => {
  // Your endpoint logic
  res.send('Hello, world!');
});
