const { sanitizeBody, sanitizeQuery } = require("express-sanitizer");

const sanitize = [
  sanitizeBody("name").trim(),
  sanitizeQuery("search").escape(),
];
