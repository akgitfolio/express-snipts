app.get('/', (req, res) => {
  console.time('render');
  res.render('index', { title: 'Express.js' });
  console.timeEnd('render');
});
