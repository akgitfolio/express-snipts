// middleware.js
const express = require('express');

const middleware = express.Router();

middleware.use((req, res, next) => {
  console.log('Request received');
  next();
});

module.exports = middleware;
