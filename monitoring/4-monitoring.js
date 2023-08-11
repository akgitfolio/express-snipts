const honeycomb = require('honeycomb-logger');

// Configure Honeycomb
honeycomb.init({
  writeKey: 'YOUR_HONEYCOMB_WRITE_KEY',
  dataset: 'express-app',
});

// Create a span for each request
app.use((req, res, next) => {
  const span = honeycomb.startSpan('request');
  req.honeycombSpan = span;
  next();
});

// Finalize the span in route handler
app.get('/', (req, res) => {
  const span = req.honeycombSpan;
  span.addTag('http.status_code', res.statusCode);
  span.end();
  res.send('Hello World!');
});
