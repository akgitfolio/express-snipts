const rateLimit = require('express-rate-limit');
app.use('/api/v1', rateLimit({
  windowMs: 60000,
  max: 100,
  statusCode: 429
});
