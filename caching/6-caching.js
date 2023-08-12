const express = require('express');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redisClient = require('redis').createClient();

const app = express();

// Enable caching using Redis
app.use(session({
  store: new RedisStore({
    client: redisClient,
    prefix: 'sess:',
  }),
  secret: 'mysecret',
  resave: false,
  saveUninitialized: true,
}));
