const express = require('express');
const morgan = require('morgan');

const app = express();

// Use Morgan as middleware
app.use(morgan('dev'));

// Log a request using Morgan
app.get('/', (req, res) => {
  res.send('Hello, world!');
});
