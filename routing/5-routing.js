// Define a GET route for filtering products
app.get('/products', (req, res) => {
  // Get the 'category' query parameter
  const category = req.query.category;

  // Query the database to fetch products in the specified category
  res.send(`Products in the ${category} category`);
});
