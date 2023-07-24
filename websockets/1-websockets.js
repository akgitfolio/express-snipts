// Join a room
socket.join("room1");

// Send message to a specific room
io.to("room1").emit("message", "Message to room 1");
