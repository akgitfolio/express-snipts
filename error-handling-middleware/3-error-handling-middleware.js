app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Unauthorized');
  } else {
    next(err);
  }
});
