const app = require('../app');

describe('Custom middleware', () => {
  it('should add a custom header to all responses', async () => {
    const middleware = (req, res, next) => {
      res.setHeader('X-Custom-Header', 'value');
      next();
    };

    app.use(middleware);

    const response = await request(app).get('/');
    expect(response.headers['x-custom-header']).toBe('value');
  });
});
