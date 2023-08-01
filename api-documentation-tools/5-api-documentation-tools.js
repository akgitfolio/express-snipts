const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); // Your swagger definition

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
