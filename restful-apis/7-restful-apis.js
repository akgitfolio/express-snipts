app.post('/create', (req, res) => {
  const { body } = req;
  // Create a new resource
  res.json({ id: 1, ...body });
});
