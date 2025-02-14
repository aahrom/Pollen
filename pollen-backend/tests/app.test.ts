import request from 'supertest';
import app from '../src/app';

describe('GET /api/test', () => {
  it('should return a greeting message', async () => {
    const response = await request(app).get('/api/test');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello from the server!');
  });
});
