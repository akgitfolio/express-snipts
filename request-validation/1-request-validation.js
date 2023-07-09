app.post('/login', [
  check('username').exists().withMessage('Username is required'),
  check('password').exists().withMessage('Password is required')
], (req, res) => { });
