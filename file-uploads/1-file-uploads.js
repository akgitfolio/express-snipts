app.use(fileupload());

app.post('/upload', (req, res) => {
  req.on('end', () => {
    if (req.files) {
      res.json(req.files);
    } else {
      res.json({ message: 'No file uploaded.' });
    }
  });
  req.on('error', (err) => {
    res.json({ error: err });
  });
});
