import request from 'supertest';
import mongoose from 'mongoose';
import app from '../src/app';

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/pollen');
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('GET /api/products', () => {
  it('returns products array for a valid chemicalId', async () => {
    // In a real test, replace with an actual ID from your seeded DB:
    // e.g., '64f323abc1234567890def12' or something you got from seed data
    const testChemicalId = '64f323abc1234567890def12';

    const response = await request(app)
      .get(`/api/products?chemicalId=${testChemicalId}`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('returns 400 if chemicalId is missing', async () => {
    const response = await request(app)
      .get('/api/products'); // no chemicalId query
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error');
  });
});
