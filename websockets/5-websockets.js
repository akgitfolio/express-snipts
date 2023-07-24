// Use JWT middleware to verify token and authorize clients
const jwt = require("jsonwebtoken");

const isAuthorized = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).send();

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(401).send();
    req.user = decoded;
    next();
  });
};

// Apply authorization middleware to Socket.IO connection
io.use(isAuthorized);
