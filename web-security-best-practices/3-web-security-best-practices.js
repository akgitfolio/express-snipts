const sanitize = require('sanitize-html');

app.post('/login', (req, res) => {
  const username = sanitize(req.body.username);
  const password = sanitize(req.body.password);

  // ...
});
