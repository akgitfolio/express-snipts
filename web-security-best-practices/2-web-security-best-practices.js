const csrf = require('csurf');

const csrfProtection = csrf({ cookie: true });

app.use(csrfProtection);

app.post('/transfer-funds', csrfProtection, (req, res) => {
  // ...
});
