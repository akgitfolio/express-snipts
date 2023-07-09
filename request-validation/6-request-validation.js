app.post('/xss-prevention', [
  check('comment').isString().escape(), // Escape HTML characters
  check('username').isString().trim()    // Remove leading and trailing whitespaces
], (req, res) => { });
