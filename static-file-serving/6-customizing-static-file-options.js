app.use(express.static('public', {
  index: 'home.html',
  extensions: ['html', 'png', 'css']
}));
