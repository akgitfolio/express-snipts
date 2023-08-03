const expect = require('expect');
const request = require('request');
const app = require('./app');

it('should get root route', () => {
    request(app, '/about', (error, response, body) => {
        expect(error).toBeNull();
        expect(response.statusCode).toBe(200);
        expect(body).toContain('About');
    });
});
