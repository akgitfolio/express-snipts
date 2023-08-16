app.use((req, res, next) => {
  if (req.session.lastActivity + 300000 < Date.now()) {
    req.session.destroy((err) => { if (err) throw err; });
  } else {
    req.session.lastActivity = Date.now();
  }
  next();
});
