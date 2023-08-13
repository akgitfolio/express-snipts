const request = require('request');

const retryOptions = {
  retries: 5,
  factor: 2,
  minTimeout: 100,
  maxTimeout: 1000
};

function makeRequest() {
  request('https://example.com', retryOptions, (err, res, body) => {
    // Handle the response
  });
}
