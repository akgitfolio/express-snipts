app.use((req, res, next) => {
  const requestInfo = {
    method: req.method,
    url: req.url,
  };
  req.requestInfo = requestInfo;
  next();
});
