const { check, validationResult } = require('express-validator');

app.post('/some-route', [
  // Validation rules
], (req, res) => {
  // Handle request

  // Validate inputs
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
});
