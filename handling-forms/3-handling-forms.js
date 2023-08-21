// Import express-validator
const { check } = require('express-validator');

// Handle POST request to a form submission route
app.post('/submit-form', [
  // Define validation rules for form fields
  check('name').notEmpty(),
  check('email').isEmail()
], (req, res) => {
  // Validate form data
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    // Form data is valid, process it
    const name = req.body.name;
    const email = req.body.email;
    // ...
  } else {
    // Form data is invalid, send an error response
    res.status(400).json({ errors: errors.array() });
  }
});
