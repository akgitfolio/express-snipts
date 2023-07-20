const helmet = require('helmet');
app.use(helmet.contentSecurityPolicy({
  directives: {
    scriptSrc: ["'self'", "cdnjs.cloudflare.com"]
  }
}));
