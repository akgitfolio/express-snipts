// URL versioning
app.get('/v1/docs', (req, res) => { /* Serve v1 docs */ });

// Middleware versioning
const version = require('./middleware/version');

app.get('/docs', version('v2'), (req, res) => { /* Serve v2 docs */ });
