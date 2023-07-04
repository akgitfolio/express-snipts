const redocSpec = require('./redoc.json');
const redoc = require('redoc-express');

app.use('/docs', redoc({
  specUrl: './redoc.json'
}));
