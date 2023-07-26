const express = require('express');
const { expressLicense } = require('express-license');

const app = express();
app.use(expressLicense());
