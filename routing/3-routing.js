// Define a POST route for receiving JSON data
app.post('/data', (req, res) => {
  // Get the JSON data from the request body
  const data = req.body;

  // Process the data and send a response
  res.send('Data received successfully!');
});
