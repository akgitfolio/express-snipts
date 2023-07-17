const express = require('express');
const app = express();

// Middleware to check if the user is logged in
const isLoggedIn = (req, res, next) => {
  if (!req.user) {
    return res.redirect('/login');
  }
  next();
};

// Apply the middleware to all routes
app.use(isLoggedIn);
