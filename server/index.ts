import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.SERVER_PORT || 8000;

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
