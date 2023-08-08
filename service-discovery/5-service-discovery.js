const express = require('express');
const locator = require('service-locator');

const app = express();

// Register a service
locator.register('myService', () => {
  return {
    name: 'My Service'
  };
}, {
  scope: 'request'
});

// Get the service in a request handler
app.get('/', (req, res) => {
  const myService = locator.get('myService');

  // The service is only available within this request
  console.log(myService.name); // My Service
});
