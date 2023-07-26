const express = require('express');
const { expressLicense } = require('express-license');

const app = express();
app.use(expressLicense());

app.get('/protected', (req, res) => {
  if (!req.license.valid) {
    return res.status(403).send('Invalid license');
  }

  res.send('Hello, world!');
});
