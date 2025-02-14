import express from 'express';
import cors from 'cors';
import chemicalRoutes from './routes/chemicalRoutes';
import productRoutes from './routes/productRoutes';
// etc.

const app = express();

// Middleware
app.use(cors());           // This adds CORS headers to every response
app.use(express.json());

// e.g.:
app.use('/api/chemicals', chemicalRoutes);
app.use('/api/products', productRoutes);

app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

export default app;
