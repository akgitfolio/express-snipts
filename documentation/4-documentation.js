app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', { title: 'Express.js' });
});
