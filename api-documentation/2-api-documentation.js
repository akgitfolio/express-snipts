const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

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

const swaggerSpec = swaggerJsdoc(options);

const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     description: Get all users.
 *     responses:
 *       200:
 *         description: OK.
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/User'
 */
router.get('/users', async (req, res) => {
  // ...
});

/**
 * @swagger
 * /users:
 *   post:
 *     description: Create a new user.
 *     parameters:
 *       - in: body
 *         name: user
 *         description: The user to create.
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       201:
 *         description: Created.
 *         schema:
 *           $ref: '#/definitions/User'
 */
router.post('/users', async (req, res) => {
  // ...
});

/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *       name:
 *         type: string
 *       email:
 *         type: string
 *         format: email
 */

app.use('/users', router);

app.listen(3000);
