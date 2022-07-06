import dotenv from 'dotenv';

import app from './app';
import './services/passport';

// setup environment configuration
dotenv.config();

// define server port number
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
