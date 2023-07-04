const winston = require('winston');

// Initialize logger
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'errors.log' })
  ]
});

// Log error
logger.error(err.message);
