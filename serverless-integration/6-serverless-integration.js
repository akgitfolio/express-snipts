// index.js
const express = require('express');

const app = express();

// Routing
app.get('/users', (req, res) => {
  res.send(['Alice', 'Bob', 'Charlie']);
});

// Body parsing
app.use(express.json());
