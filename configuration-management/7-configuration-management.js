app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('An error occurred');
});
