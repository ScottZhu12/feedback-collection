const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const userModel = require('../db/userModel');

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.googleClientID,
      clientSecret: process.env.googleClientSecret,
      callbackURL: '/auth/google/callback',
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      const existingUser = await userModel.findOne({ googleId: profile.id });

      // user is already in database (registered)
      if (existingUser) {
        return done(null, existingUser);
      }

      // a new user, create a new document in the database
      const newUser = new userModel({ googleId: profile.id });
      await newUser.save();

      return done(null, newUser);
    }
  )
);

// persist user data in the session across multiple URIs
// to maintain a login session, passport needs serialize
// and deserialize user information to and from session
// req.session.passport.user = {id: ...}
passport.serializeUser((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser((id, done) => {
  userModel.findById(id, (err, user) => {
    if (err) {
      return done(err, null);
    }

    return done(null, user);
  });
});
