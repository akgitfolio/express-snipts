const express = require('express');
const cache = require('express-cache-middleware');

const app = express();

// Enable caching for all routes
app.use(cache());

// Enable caching with custom options
app.use(cache({
  maxAge: 1000 * 60 * 60, // 1 hour
  staleTime: 1000 * 60 * 10, // 10 minutes
  staleIfError: true,
}));
