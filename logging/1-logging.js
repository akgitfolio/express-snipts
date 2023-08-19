const express = require('express');
const winston = require('winston');

const app = express();

// Create a Winston logger
const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'app.log' })
  ]
});

// Log a message using Winston
logger.info('Hello, world!');

// Log an error message using Winston
logger.error('An error occurred!');
