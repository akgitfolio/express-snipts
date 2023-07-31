// Create a new Express app
const app = express();

// Define a route for the event listener
app.post('/events', (req, res) => {
  // Parse the event from the request body
  const event = req.body;

  // Handle the event
  handleEvent(event);

  // Send a response to the event emitter
  res.sendStatus(200);
});

// Start the app
app.listen(3000);
