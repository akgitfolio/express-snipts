const passport = require('passport');

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  { usernameField: 'email', passwordField: 'password' },
  (email, password, done) => {
    // Perform database lookup to find user
    if (user) {
      // User was found
      done(null, user);
    } else {
      // User not found or password incorrect
      done(null, false);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // Retrieve user from database using id
  if (user) {
    done(null, user);
  } else {
    done(null, false);
  }
});
