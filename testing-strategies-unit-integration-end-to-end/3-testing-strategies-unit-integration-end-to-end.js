const request = require('supertest');
const app = require('../app');

describe('POST /api/users', function() {
  it('should create a new user', async function() {
    const response = await request(app).post('/api/users').send({ name: 'John Doe' });
    assert.equal(response.status, 201);
    assert.equal(response.body.name, 'John Doe');
  });
});
