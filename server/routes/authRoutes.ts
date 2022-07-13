import express from 'express';
import passport from 'passport';

const authRouter = express.Router();

// setup router
// setup google oauth route
authRouter.route('/auth/google').get(
  passport.authenticate('google', {
    scope: ['email', 'profile'],
  })
);

// setup google oauth callback route
// in the callback route url, the query code is sent back from google
authRouter.route('/auth/google/callback').get(passport.authenticate('google'));

export default authRouter;
