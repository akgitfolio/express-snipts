check("password")
  .optional({ checkFalsy: true })
  .isStrongPassword()
  .if(req => req.body.registering), // Only validate if 'registering' is true
