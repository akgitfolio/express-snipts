// middleware.js
const express = require('express');

const middleware = express.Router();

middleware.use((req, res, next) => {
  // Perform some custom middleware logic
  next();
});

module.exports = middleware;
