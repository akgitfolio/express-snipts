const { body, validationResult } = require('express-validator');
app.post('/user', [
  body('name').notEmpty().trim(),
  body('email').isEmail().normalizeEmail(),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
});
