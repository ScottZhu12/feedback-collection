const express = require('express');

const { ensureAuth, ensureGuest } = require('../middleware/auth');

const router = express.Router();

// route to homepage
router.get('/', ensureGuest, (req, res) => {
  res.json({ message: 'homepage' });
});

// route to after user successfully logged in with google
router.get('/protected', ensureAuth, (req, res) => {
  res.json({ message: req.user });
});

// route to after google authentication failed
router.get('/failure', (req, res) => {
  res.json({ message: 'something went wrong' });
});

module.exports = router;
