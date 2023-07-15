const jwt = require('jsonwebtoken');
app.post('/login', async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (user && user.comparePassword(req.body.password)) {
    const token = jwt.sign({ id: user.id }, 'SECRET_KEY');
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});
