const express = require('express');

const app = express();

// Define the expected request body schema
const bodySchema = {
  name: { type: 'string' },
  age: { type: 'number' }
};

// Use the built-in express-validator middleware
const { check } = require('express-validator');

// Create a route with request validation
app.post('/register', [
  // Validate name as a required string with a minimum length of 3
  check('name').isString().isLength({ min: 3 }),
  // Validate age as a required integer between 18 and 99
  check('age').isInt({ min: 18, max: 99 })
], (req, res) => {
  // Request is valid, proceed with your logic
});
