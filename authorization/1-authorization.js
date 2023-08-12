const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    // Unauthorized access, send a 401 response
    res.status(401).json({ message: 'Unauthorized' });
  }
};

const isAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === 'admin') {
    next();
  } else {
    // Forbidden, send a 403 response
    res.status(403).json({ message: 'Forbidden' });
  }
};
