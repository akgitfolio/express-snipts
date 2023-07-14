// Set the database URL in an environment variable
process.env.DB_URL = 'mongodb://localhost:27017/myDatabase';

// Use the environment variable in your application
app.set('dbURL', process.env.DB_URL);
