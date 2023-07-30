if (req.query.name) {
  const name = req.query.name;
  res.send(`Hello, ${name}!`);
}
