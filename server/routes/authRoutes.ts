import express from 'express';
import passport from 'passport';

// const authRouter = express.Router();

// authRouter.get(
//   '/auth/google',
//   passport.authenticate('google', {
//     scope: ['email', 'profile'],
//   })
// );

// authRouter.get('auth/google/success', (req, res) => {
//   res.send('Success');
// });

// authRouter.get('auth/google/failed', (req, res) => {
//   res.send('Failed');
// });

// authRouter.get('auth/google/callback', passport.authenticate('google'));

// // setup router
// // setup google oauth route
// // once user is logged in, retrive users email and profile information
// authRouter.route('/auth/google').get(
//   passport.authenticate('google', {
//     scope: ['email', 'profile'],
//   })
// );

// // setup google oauth callback route
// // in the callback route url, the query code is sent back from google
// authRouter
//   .route('/auth/google/callback')
//   .get(
//     passport.authenticate('google', { failureRedirect: '/auth/google/failed' })
//   );

// // route when google authantication failed
// authRouter.route('auth/google/failed').get((req, res) => {
//   res.send('Failed to login');
// });

// // route when google authantication completed correctly
// authRouter.route('/auth/google/success').get((req, res) => {
//   res.send('success');
// });

// export default authRouter;
