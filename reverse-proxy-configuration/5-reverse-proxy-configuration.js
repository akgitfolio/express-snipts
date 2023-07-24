app.use('/api', proxy(['http://localhost:3000', 'http://localhost:3001']));
