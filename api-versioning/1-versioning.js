const express = require('express');
const versioning = require('express-versioning');

const app = express();
app.use(versioning('1.0.0'));

app.get('/users', (req, res) => {
  res.send('This is the users endpoint for API version 1.0.0');
});

app.get('/users', (req, res) => {
  res.send('This is the users endpoint for API version 2.0.0');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
