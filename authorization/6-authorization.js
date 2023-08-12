// Initialize Passport and Passport session middleware
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  // Store the user's unique identifier in the session
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  // Retrieve user data from the database based on the identifier
  // This can be a database query or a user data lookup based on the id
  done(null, { username: 'user', role: 'admin' });
});
