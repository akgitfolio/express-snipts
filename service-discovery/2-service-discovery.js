const express = require('express');
const locator = require('service-locator');

const app = express();

// Register a service
locator.register('myService', () => {
  return {
    name: 'My Service',
    start: () => {
      console.log('Starting My Service');
    },
    stop: () => {
      console.log('Stopping My Service');
    }
  };
}, {
  lifecycle: true
});

// Start the service when the application starts
app.listen(3000, () => {
  locator.get('myService').start();
});

// Stop the service when the application stops
process.on('SIGTERM', () => {
  locator.get('myService').stop();
});
