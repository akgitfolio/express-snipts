const swaggerDocument = require('./swagger.json');
const swaggerUi = require('swagger-ui-express');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
