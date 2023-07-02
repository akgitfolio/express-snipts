// user.js
const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  const users = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];
  res.json(users);
});

module.exports = router;
