// Define a middleware function to authenticate requests
app.use(async (req, res, next) => {
  // Get the authorization header from the request
  const token = req.header('Authorization');

  // Check if the token is valid
  if (!token || !validateToken(token)) {
    // Return an error response if the token is invalid
    return res.status(401).send('Unauthorized');
  }

  // Get the user associated with the token
  const user = await User.findOne({ token });

  // Attach the user to the request object
  req.user = user;

  // Continue to the next middleware or route handler
  next();
});
