const { validationResult } = require('express-validator');

app.post('/register', [
  check('name').isString().isLength({ min: 3 }),
  check('age').isInt({ min: 18, max: 99 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Request is valid, proceed with your logic
});
