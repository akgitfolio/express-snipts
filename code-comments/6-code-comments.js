// Define a GET route for the root path
app.get('/', (req, res) => {
  // Render the index view
  res.render('index');
});
