// error-handler.js
app.use((err, req, res, next) => { res.status(500).json({ error: err.message }); });
