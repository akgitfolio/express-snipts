const express = require('express');
const servers = [
  { host: 'server1.example.com', connections: 0 },
  { host: 'server2.example.com', connections: 0 },
  { host: 'server3.example.com', connections: 0 },
];

const app = express();
app.get('/', (req, res) => {
  // Find the server with the least number of connections
  const server = servers.reduce((acc, cur) => (acc.connections < cur.connections ? acc : cur));

  // Increment the connections count for the selected server
  server.connections++;

  // Send the request to the server
});

app.listen(3000);
