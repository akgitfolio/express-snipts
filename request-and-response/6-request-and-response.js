// GET request handler
app.get('/users', (request, response) => {
  response.send('User list');
});

// POST request handler
app.post('/users', (request, response) => {
  const user = request.body;
  // Save user to database
  response.send('User created');
});
