const debug = require('debug')('my-middleware');

app.use((req, res, next) => {
  debug('Entering middleware');
  next();
});
