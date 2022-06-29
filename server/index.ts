import express, { Express, Request, Response } from 'express';
import passport from 'passport';
import passportGoogle from 'passport-google-oauth20';

import { googleClientID } from './config/keys';
import { googleClientSecret } from './config/keys';

// create express application (server) and define port number
const app: Express = express();
const port = process.env.PORT || 5000;

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

// setup google oauth route
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['email', 'profile'],
  })
);

// setup google oauth callback route
// in the callback route url, the query code is sent back from google
app.get('/auth/google/callback', passport.authenticate('google'));

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
