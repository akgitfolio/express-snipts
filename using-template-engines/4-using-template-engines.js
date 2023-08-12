const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

// Configure Handlebars as the default template engine
app.engine('handlebars', handlebars({
  defaultLayout: 'main'
}));

// Set the view engine to handlebars
app.set('view engine', 'handlebars');
