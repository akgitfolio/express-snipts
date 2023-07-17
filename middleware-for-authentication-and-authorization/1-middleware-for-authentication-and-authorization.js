const express = require('express');
const app = express();

// Custom middleware to log the request
const logRequest = (req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
};

// Apply the middleware to all routes
app.use(logRequest);
