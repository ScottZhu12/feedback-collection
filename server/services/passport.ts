import passport from 'passport';
import passportGoogle from 'passport-google-oauth20';

import { googleClientID } from '../config/keys';
import { googleClientSecret } from '../config/keys';

// configure google strategy
// callback function will be executed when user autherized app to access
// their google account to login (when hits the google oauth callback route)
const GoogleStrategy = passportGoogle.Strategy;
passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: '/auth/google/callback',
      passReqToCallback: true,
    },
    (accessToken) => {
      console.log(accessToken);
    }
  )
);
