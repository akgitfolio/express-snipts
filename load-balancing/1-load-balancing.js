const express = require('express');
const servers = ['server1.example.com', 'server2.example.com', 'server3.example.com'];
const serverIndex = 0;

const app = express();
app.get('/', (req, res) => {
  const server = servers[serverIndex++];
  // Send the request to the server
});

app.listen(3000);
