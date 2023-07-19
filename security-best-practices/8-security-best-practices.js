const xss = require('xss');

app.post('/submit-data', (req, res) => {
  const sanitizedInput = xss(req.body.input);

  // ...
});
