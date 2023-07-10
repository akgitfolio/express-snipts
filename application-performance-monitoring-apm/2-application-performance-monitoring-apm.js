// server.js
const express = require('express');
const newrelic = require('newrelic');
const app = express();

// Enable APM
newrelic.start({
  licenseKey: 'YOUR_LICENSE_KEY',
  appName: 'YOUR_APP_NAME',
});

app.get('/', (req, res) => {
  // Simulate a slow database query
  setTimeout(() => {
    res.send('Hello World!');
  }, 1000);
});

app.listen(3000);
