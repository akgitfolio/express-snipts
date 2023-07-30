if (err.name === 'ValidationError') {
  res.status(400).send(err.message);
} else if (err.name === 'NotFoundError') {
  res.status(404).send(err.message);
}
