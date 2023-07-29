app.get('/read/:id', (req, res) => {
  const { id } = req.params;
  // Retrieve the resource by id
  res.json({ id: 1, name: 'John Doe' });
});
