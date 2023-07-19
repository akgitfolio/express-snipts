const validator = require('validator');

app.post('/submit-data', (req, res) => {
  const name = validator.escape(req.body.name);
  const email = validator.normalizeEmail(req.body.email);

  // ...
});
