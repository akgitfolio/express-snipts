const express = require('express');
const session = require('express-session');
const MemoryStore = require('memorystore')(session);

const app = express();

// Enable caching using MemoryStore
app.use(session({
  store: new MemoryStore({
    checkPeriod: 86400000 // 1 day
  }),
  secret: 'mysecret',
  resave: false,
  saveUninitialized: true,
}));
