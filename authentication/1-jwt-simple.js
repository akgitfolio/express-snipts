const jwt = require('jwt-simple');
const secret = 'my-secret';

app.get('/login', (req, res) => {
  const payload = { id: 1, username: 'john' };
  const token = jwt.encode(payload, secret);
  res.json({ token });
});

app.get('/protected', (req, res) => {
  const token = req.header('Authorization').split(' ')[1];
  const payload = jwt.decode(token, secret);
  res.json(payload);
});
