// Client (React App)
import { io } from "socket.io-client";

// Connect to Socket.IO server
const socket = io();

// Handle incoming events
socket.on("connect", () => {
  console.log("Connected to server!");
});

socket.on("message", (msg) => {
  // Display message on UI
});

// Server (Express & Socket.IO)
// ... (as described above)
