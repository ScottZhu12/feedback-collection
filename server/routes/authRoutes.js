const express = require('express');
const passport = require('passport');

const authRouter = express.Router();

// route user to the google signin page
authRouter.route('/auth/google').get(
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

// retrieve user data using the access token (code) received
authRouter.route('/auth/google/callback').get(passport.authenticate('google'));

module.exports = authRouter;
