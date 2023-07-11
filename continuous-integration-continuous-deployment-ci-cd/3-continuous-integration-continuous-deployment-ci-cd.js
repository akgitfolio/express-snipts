const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should respond with a 200 status code', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });
});
