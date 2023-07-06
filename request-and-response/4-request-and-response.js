// Middleware that handles errors
app.use((error, request, response, next) => {
  // Log the error
  console.error(error);

  // Send an error response to the client
  response.status(500).send('Internal Server Error');
});
