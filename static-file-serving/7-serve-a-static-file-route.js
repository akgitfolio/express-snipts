app.get('/image.png', (req, res) => {
  res.sendFile('./public/image.png');
});
