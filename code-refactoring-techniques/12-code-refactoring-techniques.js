app.use((err, req, res, next) => {
  // Log the error
  console.error(err.stack);
  // Send an error response to the client
  res.status(500).send('An error occurred. Please try again.');
});
