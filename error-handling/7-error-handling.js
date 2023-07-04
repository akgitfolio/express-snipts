// Set status code and send error message
res.status(500).send('An error occurred');

// Set status code and send error object (not recommended for production)
res.status(500).send(err);
