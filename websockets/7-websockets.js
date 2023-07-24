// Send a message to a specific client
socket.emit("message", "Hello from server!");

// Broadcast a message to all connected clients
io.emit("message", "Broadcast message");
