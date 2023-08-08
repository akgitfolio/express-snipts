const express = require('express');
const locator = require('service-locator');

const app = express();

// Register a service
locator.register('myService', () => {
  return {
    name: 'My Service'
  };
});

// Get the service
const myService = locator.get('myService');

// Use the service
console.log(myService.name); // My Service
