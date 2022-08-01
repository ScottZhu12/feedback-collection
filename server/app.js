const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./services/passport');

const dbConnect = require('./db/dbConnect');
const router = require('./routes/index');
const authRouter = require('./routes/authRoutes');

const app = express();

// connect to mongodb
dbConnect();

// setup middleware
// add generic JSON and URL-encoded parser
// parse the bodies of all incoming requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// enable express application to use session
// to store authenticated user data
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.mongoURI,
      autoRemove: 'interval',
      autoRemoveInterval: 1,
      touchAfter: 24 * 3600,
    }),
  })
);

// enable resources sharing between front-end and back-end
app.use(cors());

// enable passport to use session to maintain the login session
app.use(passport.initialize());
app.use(passport.session());

// router middleware
app.use('/', router);
app.use('/auth', authRouter);

module.exports = app;
