const express = require('express');
const app = express();

app.use('/api', proxy('http://localhost:3000', {
  // Options
}));
