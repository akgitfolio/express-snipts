const express = require('express');
const vegeta = require('vegeta');

const app = express();

app.get('/endpoint', (req, res) => {
  res.send('Hello, world!');
});

const target = vegeta.target('https://example.com/endpoint');

const scenario = vegeta.createScenario('My scenario');

vegeta.attack(target, scenario, {
  duration: 10,
  rate: 10,
  keepAlive: true,
});
