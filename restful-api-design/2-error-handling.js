// GET /api/users
app.get('/api/users', (req, res) => {
  // Query the database for all users
  User.find({}, (err, users) => {
    if (err) return res.status(500).json({ error: err.message });
    // Send the users as a JSON response
    res.json(users);
  });
});
