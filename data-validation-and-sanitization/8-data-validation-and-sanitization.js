const { validationResult } = require("express-validator");

router.post("/", (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Handle the request with validated data
});
