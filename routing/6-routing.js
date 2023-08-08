// Create a middleware function to check for authentication
const authMiddleware = (req, res, next) => {
  // Check if the user is authenticated
  if (req.isAuthenticated()) {
    // Continue to the next middleware or route handler
    next();
  } else {
    // Redirect to the login page
    res.redirect('/login');
  }
};

// Apply the middleware to all routes that start with '/admin'
app.use('/admin', authMiddleware);
