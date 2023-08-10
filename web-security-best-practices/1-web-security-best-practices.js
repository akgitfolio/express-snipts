const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2');

passport.use(new OAuth2Strategy({
  clientID: '...',
  clientSecret: '...',
  authorizationURL: '...',
  tokenURL: '...',
  callbackURL: '...'
},
(accessToken, refreshToken, profile, done) => {
  // ...
}));

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
