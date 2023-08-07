// routes/user.js
/**
 * @swagger
 * /api/users:
 *  get:
 *    tags:
 *    - Users
 *    summary: Get all users
 *    responses:
 *      200:
 *        description: OK
 *        schema:
 *          type: array
 *          items:
 *            $ref: '#/definitions/User'
 *  post:
 *    tags:
 *    - Users
 *    summary: Create a new user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/definitions/User'
 *    responses:
 *      201:
 *        description: Created
 *        schema:
 *          $ref: '#/definitions/User'
 */
app.get('/api/users', (req, res) => { /* ... */ });
app.post('/api/users', (req, res) => { /* ... */ });
