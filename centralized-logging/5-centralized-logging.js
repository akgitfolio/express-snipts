app.use((req, res, next) => {
  logger.info(`[${req.method}] ${req.url}`);
  next();
});
