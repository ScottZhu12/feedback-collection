import express, { Express } from 'express';
import { connect } from 'mongoose';
import passport from 'passport';
// import cookieSeesion from 'cookie-session';

// import authRouter from './routes/authRoutes';
import { mongoURI, cookieKey } from './config/keys';

// create express application (server)
const app: Express = express();

// connect to mongodb
const mongoConnect = async () => {
  await connect(mongoURI);

  console.log('database connected');
};
mongoConnect().catch((err) => console.log(err));

// setup middleware
// handle json data
app.use(express.json());
// handle routes
// app.use('/', authRouter);
// handle cookie
// app.use(
//   cookieSeesion({
//     name: 'session',
//     keys: [cookieKey],
//     maxAge: 24 * 60 * 60 * 1000,
//   })
// );
// inform passport to use cookie session
// app.use(passport.initialize());
// app.use(passport.session());

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['email', 'profile'],
  })
);

app.get('/auth/google/callback', passport.authenticate('google'));

export default app;
