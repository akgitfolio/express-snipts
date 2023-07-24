wss.clients.forEach((client) => {
  client.send('Hello from server!');
});
