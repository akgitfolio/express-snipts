app.use((err, req, res, next) => {
  if (err.name === 'MyCustomError') {
    // Handle the error here
    res.status(400).send('Bad request');
  } else {
    // Pass the error to the next middleware
    next(err);
  }
});
