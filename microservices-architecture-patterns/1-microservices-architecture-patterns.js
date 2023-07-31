// Create a new Express app
const app = express();

// Define a route for the API
app.get('/api', (req, res) => {
  // Send a response from the API
  res.json({ message: 'Hello from the API!' });
});

// Start the app
app.listen(3000);
