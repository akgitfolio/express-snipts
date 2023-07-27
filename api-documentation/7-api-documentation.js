// Import the package
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// Define the Swagger specification
const options = {
  swaggerDefinition: {
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'This is my API description.',
    },
    host: 'localhost:3000',
    basePath: '/',
  },
  apis: ['./routes/*.js'],
};

// Generate the Swagger specification
const swaggerSpec = swaggerJsdoc(options);

// Set up the Swagger UI middleware
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
