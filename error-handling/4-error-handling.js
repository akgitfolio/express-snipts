const winston = require('winston');
const { check, validationResult } = require('express-validator');

app.post('/some-route', [
  check('name').not().isEmpty(), // Validation rule
], async (req, res) => {
  try {
    // Handle request

    // Validate inputs
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  } catch (err) {
    logger.error(err.message);

    if (!err.status) { // Set default status if not provided
      err.status = 500;
    }

    return res.status(err.status).send(err.message);
  }
});
