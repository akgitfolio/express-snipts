// server.js
const express = require('express');
const customMiddleware = require('./custom-middleware');
const app = express();

// Attach custom middleware
app.use(customMiddleware);

// ...
