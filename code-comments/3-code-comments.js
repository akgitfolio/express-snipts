// Define a controller method to create a new user
const createUser = async (req, res) => {
  // Get the user data from the request body
  const { name, email, password } = req.body;

  // Create a new user
  const user = new User({ name, email, password });

  // Save the user to the database
  await user.save();

  // Return a success response
  res.status(201).send('User created');
};
