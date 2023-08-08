// Create a router for the '/api' namespace
const apiRouter = express.Router();

// Define routes inside the router
apiRouter.get('/users', (req, res) => {
  // ...
});

apiRouter.post('/posts', (req, res) => {
  // ...
});

// Mount the router to the '/api' path
app.use('/api', apiRouter);
