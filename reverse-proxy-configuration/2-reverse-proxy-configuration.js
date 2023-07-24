app.use('/api', proxy('http://localhost:3000', {
  cache: true
}));
