const express = require('express');
require('./services/passport');

const authRouter = require('./routes/authRoutes');

const app = express();

// setup middleware
app.use('/', authRouter);

module.exports = app;
