const { check, validationResult } = require('express-validator');

const validateRequest = [
  check('username').notEmpty(),
  check('password').isLength({ min: 8 }),
];

app.post('/login', validateRequest, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Process the login request
});
