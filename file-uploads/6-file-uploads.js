const express = require('express');
const fileupload = require('express-fileupload');

const app = express();

// Use the middleware to enable file uploads
app.use(fileupload());
