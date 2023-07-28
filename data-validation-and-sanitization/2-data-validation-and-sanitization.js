const { check, validationResult } = require("express-validator");

const validate = [
  check("email").isEmail(),
  check("username").isLength({ min: 3, max: 20 }),
  check("password").isStrongPassword(),
];
