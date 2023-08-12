app.get('/secret', isAuthenticated, (req, res) => {});
app.post('/admin', isAdmin, (req, res) => {});
