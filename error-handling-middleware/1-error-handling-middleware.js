app.use((err, req, res, next) => {
  // Log the error
  console.error(err.stack);

  // Send the error response
  res.status(500).send('Internal Server Error');
});
