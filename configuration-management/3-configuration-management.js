// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`Received a ${req.method} request to ${req.url}`);
  next();
});
