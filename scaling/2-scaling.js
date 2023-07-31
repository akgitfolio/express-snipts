const express = require('express');
const cacheMiddleware = require('express-cache-middleware');

const app = express();

// Create a new cache middleware with a default ttl of 300 seconds (5 minutes)
const cache = new cacheMiddleware();

// Apply the cache middleware to your desired routes
app.use('/static', cache.cache());

// Other routes can use your Express.js application code as usual
