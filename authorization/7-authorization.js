// Configure session storage
const sessionOptions = {
  secret: 'your-secret-key', // Keep this secure!
  resave: false,
  saveUninitialized: true
};
app.use(session(sessionOptions));
