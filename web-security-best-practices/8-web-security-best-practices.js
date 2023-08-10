const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'security.log' })
  ]
});

app.use((err, req, res, next) => {
  logger.error(err.stack);

  res.status(500).send('Internal Server Error');
});
