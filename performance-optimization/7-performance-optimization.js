const express = require('express');
const app = express();

// Create a load balancer
const loadbalancer = require('express-load-balancer');

// Add your servers to the load balancer
loadbalancer.addServer(app1);
loadbalancer.addServer(app2);

// Start the load balancer
loadbalancer.listen(port);
