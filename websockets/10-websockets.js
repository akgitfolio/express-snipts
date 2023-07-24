const chatNamespace = io.of("/chat"); // Create a namespace for chat

chatNamespace.on("connection", (socket) => {
  // Handle chat-related events within this namespace
});
