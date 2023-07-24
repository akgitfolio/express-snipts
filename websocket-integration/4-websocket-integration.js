const express = require('express');
const WebSocket = require('ws');

const app = express();
const PORT = 8080;

const wss = new WebSocket.Server({ server: app.listen(PORT) });

const clients = [];

wss.on('connection', (ws) => {
  clients.push(ws);

  ws.on('message', (message) => {
    wss.clients.forEach((client) => {
      if (client !== ws) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    clients.splice(clients.indexOf(ws), 1);
  });
});

console.log(`WebSocket server listening on port ${PORT}`);
