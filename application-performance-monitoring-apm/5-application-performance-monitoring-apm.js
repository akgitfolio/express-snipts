// server.js
const express = require('express');
const newrelic = require('newrelic');
const app = express();

// Enable slow request detection
newrelic.configure({
  slowTransactionThreshold: 500, // in milliseconds
});

// ...
