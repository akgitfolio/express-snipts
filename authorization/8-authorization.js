const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  (username, password, done) => {
    // Here we check the database for the user with the given username and password.
    // If the credentials match, call done() with the user object and null as the error
    // If not, call done() with null as the user object and an error
  }
));
