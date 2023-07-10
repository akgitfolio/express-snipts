const express = require('express');
const metrics = require('metrics');

const app = express();
const requestCounter = metrics.counter('request_count');
const responseTimeHistogram = metrics.histogram('response_time');

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const end = Date.now();
  requestCounter.inc(1);
  responseTimeHistogram.update(end - start);
});

app.get('/metrics', (req, res) => {
  res.send(metrics.toJSON());
});
