const router = express.Router();

// Middleware to extract the user ID from the request
router.param('userID', (req, res, next, userID) => {
  req.userID = userID;
  next();
});

// Route for getting user information
router.route('/users/:userID')
  .get((req, res) => {
    res.json({ userID: req.userID });
  });
