// app.js
const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();

// Swagger definition
const swaggerDefinition = {
  info: {
    title: 'My API',
    version: '1.0.0',
  },
};

// Swagger options
const swaggerOptions = {
  swaggerDefinition,
  apis: ['./routes/*.js'],
};

// Initialize Swagger
const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
