const app = require('./app');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const keys = require('./config/keys');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      passReqToCallback: true,
    },
    async (request, accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
    }
  )
);

// route user to the google signin page
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

// retrieve user data using the access token (code) received
app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});

// googleClientID:
//     '799531581101-94b1r051flp4kit1o9oloaafaidt0gnf.apps.googleusercontent.com',
//   googleClientSecret: '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',
