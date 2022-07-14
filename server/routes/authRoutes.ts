import express from 'express';
import passport from 'passport';

const authRouter = express.Router();

// setup router
// setup google oauth route
// once user is logged in, retrive users email and profile information
authRouter.route('/auth/google').get(
  passport.authenticate('google', {
    scope: ['email', 'profile'],
  })
);

// setup google oauth callback route
// in the callback route url, the query code is sent back from google
authRouter.route('/auth/google/callback').get(passport.authenticate('google'));

// setup user logged in route
authRouter.route('/auth/google/current_user').get((req, res) => {
  res.send(req.user);
});

export default authRouter;
