app.use('/api', proxy('http://localhost:3000', {
  cache: true,
  cacheExpires: 600000 // 10 minutes
}));
