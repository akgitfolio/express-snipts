const redisStore = require('rate-limit-redis');

const limiter = rateLimit({
  ...
  store: new redisStore(),
});
