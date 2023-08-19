const sinon = require('sinon');
const app = require('./app.js');

describe('Mocking', () => {
  it('should call the callback function', () => {
    const callback = sinon.stub().callsFake(() => 'Hello World!');
    app.middleware(callback);

    expect(callback.called).toBe(true);
  });
});
