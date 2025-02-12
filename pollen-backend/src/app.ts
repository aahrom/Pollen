import express, { Request, Response } from 'express';
import cors from 'cors'; // import the cors library
import allergenRouter from '../routes/allergenRoutes';



const app = express();

// Middleware
app.use(express.json());

// Use the CORS middleware 
app.use(cors());
app.use('/allergens', allergenRouter);


// Basic route for testing
// src/app.ts

app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});


export default app;
