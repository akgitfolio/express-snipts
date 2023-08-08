const vegeta = require('vegeta');

const target = vegeta.target('https://example.com/endpoint');

const scenario = vegeta.createScenario('My scenario');

vegeta.attack(target, scenario, {
  duration: 10,  // Duration in seconds
  rate: 10,      // Requests per second
  keepAlive: true,  // Keep HTTP connections open
});
