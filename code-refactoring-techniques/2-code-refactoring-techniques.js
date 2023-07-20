const middlewareComposer = (...middlewares) => {
  return (req, res, next) => {
    const composedMiddleware = middlewares.reduce(
      (acc, middleware) => middleware(acc),
      null
    );
    composedMiddleware(req, res, next);
  };
};
