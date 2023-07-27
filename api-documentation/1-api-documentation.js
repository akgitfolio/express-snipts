const express = require('express');
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
