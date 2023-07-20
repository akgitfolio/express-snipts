const UserService = require('./services/user-service');

// Create a new instance of the user service and inject it into the route handler
const userController = (userService) => {
  return {
    async createUser(req, res) {
      // Use the user service to create the user
      const user = await userService.createUser(req.body);
      res.json(user);
    },
  };
};

// Use the dependency injection pattern in the Express router
const router = express.Router();
router.post('/users', userController(UserService));
