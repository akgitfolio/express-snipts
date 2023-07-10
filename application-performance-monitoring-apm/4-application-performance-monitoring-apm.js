// custom-middleware.js
const newrelic = require('newrelic');

module.exports = (req, res, next) => {
  const transaction = newrelic.startTransaction('Custom Middleware');

  // Add custom attributes to the transaction
  transaction.addCustomAttribute('user_id', req.user.id);
  transaction.addCustomAttribute('request_type', req.method);

  // End the transaction
  res.on('finish', () => {
    transaction.end();
  });

  next();
};
