app.get('/users', async (req, res) => {
  try {
    const users = await pool.query('SELECT * FROM users');
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Database error' });
  }
});
