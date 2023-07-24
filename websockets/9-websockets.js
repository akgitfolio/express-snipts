// Listen for custom "chat" event from clients
io.on("chat message", (msg) => {
  console.log("Message received:", msg);
});
