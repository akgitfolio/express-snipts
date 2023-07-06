// Middleware that logs the request URL
app.use((request, response, next) => {
  console.log(`Received request to ${request.url}`);
  next();
});
