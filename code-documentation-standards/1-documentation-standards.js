// This is a function that handles GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// This is a middleware function that logs the request URL
app.use((req, res, next) => {
  console.log(req.url);
  next();
});

// This is a property that stores the port number on which the server is listening
app.set('port', 3000);
