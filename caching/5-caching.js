// Using a CDN for edge caching
const express = require('express');
const cdn = require('express-cdn');

const app = express();

// Enable edge caching with a CDN
app.use(cdn({
  root: 'public',
  maxAge: 1000 * 60 * 60 * 24, // 24 hours
}));
