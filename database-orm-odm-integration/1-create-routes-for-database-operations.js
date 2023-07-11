// routes/users.js
const express = require('express');
const User = require('../models/user');

const router = express.Router();

// Get all users
router.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// Create a new user
router.post('/users', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

module.exports = router;
