app.put('/update/:id', (req, res) => {
  const { id, body } = req;
  // Update the resource by id
  res.json({ id: 1, ...body });
});
