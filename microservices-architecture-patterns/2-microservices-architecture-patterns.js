// Create a new Express app
const app = express();

// Define a route for the service
app.get('/service', (req, res) => {
  // Send a response from the service
  res.send('Hello from the service!');
});

// Start the app
app.listen(3000);
