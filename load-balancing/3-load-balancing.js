const express = require('express');
const servers = [
  { host: 'server1.example.com', weight: 1 },
  { host: 'server2.example.com', weight: 2 },
  { host: 'server3.example.com', weight: 3 },
];

const app = express();
const totalWeight = servers.reduce((acc, cur) => acc + cur.weight, 0);
let currentWeight = 0;

app.get('/', (req, res) => {
  // Find the server with the next available weight
  while (currentWeight + servers[serverIndex].weight > totalWeight) {
    serverIndex++;
  }

  const server = servers[serverIndex];
  currentWeight += server.weight;

  // Send the request to the server
});

app.listen(3000);
