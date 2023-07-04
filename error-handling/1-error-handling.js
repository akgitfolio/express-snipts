app.get('/some-route', (req, res) => {
  throw new Error('An error occurred');
});
