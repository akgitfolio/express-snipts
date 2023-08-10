app.use((req, res, next) => {
  res.header('Content-Security-Policy', "default-src 'self'; script-src 'self' https://example.com");

  next();
});
