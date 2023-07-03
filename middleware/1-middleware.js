const loggerMiddleware = (req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
};
