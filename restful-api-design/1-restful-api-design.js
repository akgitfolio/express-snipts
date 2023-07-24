// POST /api/users
app.post('/api/users', (req, res) => {
  // Create a new user from the request body
  const user = new User(req.body);
  // Save the user to the database
  user.save((err, savedUser) => {
    if (err) return res.status(500).json({ error: err.message });
    // Send the saved user as a JSON response
    res.json(savedUser);
  });
});
