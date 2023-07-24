wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log('Received message: %s', message);

    ws.send('Hello from server!');
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
