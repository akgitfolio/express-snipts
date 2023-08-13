const circuitBreaker = require('circuitbreaker');

const breaker = circuitBreaker(cb => {
  // Perform the operation
  cb(null, 'result');
}, {
  timeout: 1000,
  resetTimeout: 10000
});

breaker.fire(err, result => {
  // Handle the result
});
