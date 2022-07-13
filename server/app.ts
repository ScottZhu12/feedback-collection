import express, { Express } from 'express';

import authRouter from './routes/authRoutes';

// create express application (server)
const app: Express = express();

// setup middleware
app.use(express.json());
app.use('/api', authRouter);

export default app;
