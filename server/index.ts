import express, { Express, Request, Response } from 'express';
import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth';

// create express application and define port number
const app: Express = express();
const port = process.env.PORT || 8080;

app.get('/', (req: Request, res: Response) => {
  try {
    res.status(200).json({
      status: 'success',
      data: {
        message: 'Welcome',
      },
    });
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
