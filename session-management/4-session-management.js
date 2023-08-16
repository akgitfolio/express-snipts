const RedisStore = require('connect-redis')(session);
app.use(session({ store: new RedisStore({ host: 'localhost', port: 6379 }), ... }));
