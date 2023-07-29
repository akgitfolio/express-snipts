const { validateParams } = require('./middleware');
app.post('/create', validateParams, (req, res) => {...});
