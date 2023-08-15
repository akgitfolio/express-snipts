const session = require('express-session');

app.use(session({
  secret: 'my-secret',
  resave: false,
  saveUninitialized: false
}));

app.get('/login', (req, res) => {
  req.session.user = { id: 1, username: 'john' };
  res.redirect('/');
});
