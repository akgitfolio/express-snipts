const request = require('supertest');
const app = require('../app');
const expressRoutesTester = require('express-routes-tester');

describe('GET /users', () => {
  it('should return a list of users', async () => {
    const mockRequest = expressRoutesTester.get('/users');
    const response = await request(app).mockRequest(mockRequest);
    expect(response.status).toBe(200);
    expect(response.body).toEqual([{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]);
  });
});
