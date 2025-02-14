// src/routes/chemicalRoutes.ts
import { Router } from 'express';
import Chemical from '../models/Chemical';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const searchTerm = req.query.name?.toString() || '';
    const regex = new RegExp(searchTerm, 'i'); // case-insensitive

    const chemicals = await Chemical.find({
      $or: [
        { name: { $regex: regex } },
        { synonyms: { $regex: regex } },
      ],
    });

    res.json(chemicals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
