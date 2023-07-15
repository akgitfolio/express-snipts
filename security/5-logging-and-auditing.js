const morgan = require('morgan');
app.use(morgan('combined', {
  stream: fs.createWriteStream('./access.log')
}));
