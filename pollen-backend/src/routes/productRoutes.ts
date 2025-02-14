// src/routes/productRoutes.ts
import { Router, Request } from 'express';
import Product from '../models/Product';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const chemicalId = req.query.chemicalId?.toString();

    if (!chemicalId) {
      return res.status(400).json({ error: 'chemicalId is required' });
    }

    // Find products that contain this chemical
    const products = await Product.find({ chemicals: chemicalId }).populate('chemicals');

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
