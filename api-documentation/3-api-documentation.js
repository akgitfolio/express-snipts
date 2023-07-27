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
