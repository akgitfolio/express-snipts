const bugsnag = require('@bugsnag/js');

app.use((err, req, res, next) => {
  // Notify Bugsnag of the error
  bugsnag.notify(err);

  // Send the error response
  res.status(500).send('Internal Server Error');
});
