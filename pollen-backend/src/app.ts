import express, { Request, Response } from 'express';
import allergenRouter from '../routes/allergenRoutes';



const app = express();

// Middleware
app.use(express.json());

app.use('/allergens', allergenRouter);


// Basic route for testing
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Pollen Backend!');
});

export default app;
