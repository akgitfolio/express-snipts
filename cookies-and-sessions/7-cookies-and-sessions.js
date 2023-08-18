const express = require('express');
const expressSession = require('express-session');

const app = express();

app.use(expressSession({
  secret: 'mySecret',
  resave: false,
  saveUninitialized: true
}));

app.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.send('You are logged in.');
  } else {
    res.send('You are not logged in.');
  }
});

app.post('/login', (req, res) => {
  req.session.loggedIn = true;
  res.redirect('/');
});

app.post('/logout', (req, res) => {
  req.session.loggedIn = false;
  res.redirect('/');
});

app.listen(3000);
