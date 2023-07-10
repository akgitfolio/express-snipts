// server.js
const express = require('express');
const newrelic = require('newrelic');
const app = express();

// Enable APM error reporting
newrelic.addPlugin('express');

app.use((err, req, res, next) => {
  // Log the error
  console.error(err);

  // Report the error to New Relic
  newrelic.noticeError(err);

  // Send a response to the client
  res.status(500).send('Internal Server Error');
});

// ...
