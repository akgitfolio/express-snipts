const csrf = require('csurf');

const csrfProtection = csrf({ cookie: true });

app.use(csrfProtection);

app.post('/submit-data', csrfProtection, (req, res) => {
  // ...
});
