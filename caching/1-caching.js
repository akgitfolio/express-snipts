// Using Redis as a distributed cache
const express = require('express');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redisCluster = require('redis-cluster');

const app = express();

// Enable distributed caching using Redis cluster
app.use(session({
  store: new RedisStore({
    client: redisCluster.createCluster({
      nodes: [{
        host: 'localhost',
        port: 6379
      }, {
        host: 'localhost',
        port: 6380
      }, {
        host: 'localhost',
        port: 6381
      }],
    }),
    prefix: 'sess:',
  }),
  secret: 'mysecret',
  resave: false,
  saveUninitialized: true,
}));
