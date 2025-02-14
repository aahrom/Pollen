// src/seed.ts
import mongoose from 'mongoose';
import Chemical from './src/models/Chemical';
import Product from './src/models/Product';

async function seedData() {
  try {
    await mongoose.connect('mongodb://localhost:27017/pollen');
    
    // Clear existing data
    await Chemical.deleteMany({});
    await Product.deleteMany({});

    const chemical1 = await Chemical.create({
      name: 'Iodopropynyl Butylcarbamate',
      synonyms: ['IPBC'],
      commonUsage: 'Commonly used in cosmetics as a preservative',
    });

    const chemical2 = await Chemical.create({
      name: 'Nickel',
      synonyms: [],
      commonUsage: 'Used in metal alloys, jewelry, etc.',
    });

    const product1 = await Product.create({
      name: 'XYZ Lash Glue',
      brand: 'ABC Cosmetics',
      category: 'Cosmetics',
      chemicals: [chemical1._id], // references IPBC
    });

    const product2 = await Product.create({
      name: 'All-Purpose Nail Glue',
      brand: 'NailMaster',
      category: 'Adhesives',
      chemicals: [chemical1._id, chemical2._id],
    });

    console.log('Seed data created:', { chemical1, chemical2, product1, product2 });
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.connection.close();
  }
}

seedData();
