// Define a GET route for viewing a specific user profile
app.get('/profile/:username', (req, res) => {
  // Get the 'username' parameter from the request path
  const username = req.params.username;

  // Query the database to fetch user info and send it as response
  res.send(`User profile for ${username}`);
});
