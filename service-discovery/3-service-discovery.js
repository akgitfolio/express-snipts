const express = require('express');
const locator = require('service-locator');

const app = express();

// Register a service
locator.register('myService', () => {
  return {
    name: 'My Service'
  };
});

// Inject the service into a controller
const myController = (myService) => {
  return {
    index: (req, res) => {
      res.send(myService.name);
    }
  };
};

// Use the controller
app.get('/', locator.inject('myService')(myController.index));
