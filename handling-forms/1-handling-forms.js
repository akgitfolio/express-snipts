// Import body-parser
const bodyParser = require('body-parser');

// Create an Express app
const app = express();

// Use body-parser to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Handle POST request to a form submission route
app.post('/submit-form', (req, res) => {
  // Access form data in req.body
  const name = req.body.name;
  const email = req.body.email;

  // Process form data and send a response
  res.send(`Form submitted successfully! Name: ${name}, Email: ${email}`);
});
