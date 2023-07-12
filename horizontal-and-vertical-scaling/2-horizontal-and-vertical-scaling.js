// app.js
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  // Handle incoming requests
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
