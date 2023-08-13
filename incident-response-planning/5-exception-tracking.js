const Sentry = require('@sentry/node');
Sentry.init({ dsn: 'YOUR_SENTRY_DSN' });

app.use(Sentry.Handlers.requestHandler());
