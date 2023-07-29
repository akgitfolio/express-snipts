app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  // Delete the resource by id
  res.json({ id: 1, deleted: true });
});
