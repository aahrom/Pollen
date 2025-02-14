// tests/chemicals.test.ts
import request from 'supertest';
import mongoose from 'mongoose';
import app from '../src/app';

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/pollen');
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('GET /api/chemicals', () => {
  it('returns chemicals array', async () => {
    const response = await request(app).get('/api/chemicals');
    expect(response.status).toBe(200);
    // e.g., expect response body to be an array
    expect(Array.isArray(response.body)).toBe(true);
  });
});
