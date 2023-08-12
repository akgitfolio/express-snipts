// Using a cache invalidation middleware
const express = require('express');
const cacheInvalidate = require('express-cache-invalidate');

const app = express();

// Enable cache invalidation
app.use(cacheInvalidate());

// Define an invalidation route
app.post('/invalidate/:key', (req, res) => {
  // Invalidate the cache for the specified key
  req.cacheInvalidate.invalidate(req.params.key);
  res.sendStatus(200);
});
