const markdown = require('express-markdown');

app.use(markdown.middleware);
app.get('/docs', (req, res) => {
  res.sendFile('api.md');
});
