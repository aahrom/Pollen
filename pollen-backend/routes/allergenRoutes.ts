// src/routes/allergenRoutes.ts
import { Router } from 'express';

const router = Router();

router.get('/search', (req, res) => {
  const { q } = req.query;
  // In the future: fetch data from DB based on q
  res.json({ message: `Searching for ${q}` });
});

export default router;
