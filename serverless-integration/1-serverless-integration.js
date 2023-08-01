// index.js
const express = require('express');
const middleware = require('./middleware');

const app = express();

// Use middleware
app.use(middleware);

// Routing
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Body parsing
app.use(express.json());

module.exports.handler = app;
