// Define a GET route for the root path
app.get('/', (req, res) => {
  // Send a response with the message "Hello World!"
  res.send('Hello World!');
});

// Define a POST route for the '/submit' path
app.post('/submit', (req, res) => {
  // Handle the POST request and respond with a message
  res.send('Form submitted successfully!');
});
