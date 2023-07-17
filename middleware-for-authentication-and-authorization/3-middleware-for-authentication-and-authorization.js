const express = require('express');
const app = express();

// Middleware to check if the user has the required permissions
const hasPermission = (req, res, next) => {
  const user = req.user;
  const requiredPermission = 'edit_articles';

  if (!user.permissions.includes(requiredPermission)) {
    return res.status(403).send('Forbidden');
  }
  next();
};

// Apply the middleware to a specific route
app.get('/articles/:id/edit', hasPermission);
