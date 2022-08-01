const express = require('express');
const passport = require('passport');

const authRouter = express.Router();

// route to google signin page
authRouter.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

// route to after user signed in with google
authRouter.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/failure',
  }),
  (req, res) => {
    res.redirect('/protected');
  }
);

// route to logout the user
authRouter.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
  });
  res.redirect('/');
});

module.exports = authRouter;
