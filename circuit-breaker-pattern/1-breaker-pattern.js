const express = require('express');
const app = express();

// Create a circuit breaker middleware
const circuitBreaker = require('express-circuit-breaker');
app.use(circuitBreaker({
  errorThresholdPercentage: 50, // Percentage of failed requests before opening the circuit
  resetTimeout: 30000, // How long to wait before closing the circuit (in milliseconds)
}));

// Define a route handler that will be protected by the circuit breaker
app.get('/protected', (req, res) => {
  // Make a request to the service
  // ...

  // If the request fails, the circuit will be tripped and this error will be sent
  res.status(503).send('Service Unavailable');
});

app.listen(3000);
