const passport = require('passport');
app.use(passport.authenticate('jwt', { session: false }));
