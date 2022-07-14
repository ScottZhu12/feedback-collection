import passport from 'passport';
import passportGoogle from 'passport-google-oauth20';
import { HydratedDocument, ObjectId } from 'mongoose';

import { googleClientID } from '../config/keys';
import { googleClientSecret } from '../config/keys';
import userModel, { IUser } from '../models/usersModel';

/*
  the entire serializeUser and deserializeUser is to help
  the passport to keep track of currently signed in user
*/

// get piece of user info as cookie and save to session
passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

// retrive the user document from session (cookie)
passport.deserializeUser(async (id: ObjectId, done) => {
  const foundUser = await userModel.findById(id);

  done(null, foundUser);
});

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
    async (request, accessToken, refreshToken, profile, done) => {
      // check if the user is already in mongodb
      const foundUser = await userModel.findOne({ googleId: profile.id });

      if (foundUser) {
        // user is already in the mongodb
        // done() to inform passport the process is finished
        done(null, foundUser);
      } else {
        // create a new user (document)
        const user: HydratedDocument<IUser> = new userModel({
          googleId: profile.id,
        });

        // save the user in the mongodb
        await user.save();

        // done() to inform passport the process is finished
        done(null, user);
      }
    }
  )
);
