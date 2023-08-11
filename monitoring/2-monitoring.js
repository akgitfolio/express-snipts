const promClient = require('prom-client');

// Create a counter for request count
const requestCount = new promClient.Counter({
  name: 'requests_total',
  help: 'Total number of requests',
});

// Create a summary for response time
const responseTime = new promClient.Summary({
  name: 'response_time_seconds',
  help: 'Response time in seconds',
});

// Track metrics in route handler
app.get('/', (req, res) => {
  requestCount.inc();

  const startTime = Date.now();
  res.send('Hello World!');
  const endTime = Date.now();
  responseTime.observe(endTime - startTime);
});
