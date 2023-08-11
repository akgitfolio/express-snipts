const datadog = require('datadog-metrics');

// Set DataDog options
datadog.init({
  apiKey: 'YOUR_DATA_DOG_API_KEY',
});

// Log errors using DataDog
app.use((err, req, res, next) => {
  datadog.error(err, {
    tags: ['error_type'],
  });
  res.status(500).send('Internal Server Error');
});
