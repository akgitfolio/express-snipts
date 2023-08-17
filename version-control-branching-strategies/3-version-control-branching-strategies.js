app.get("/users", async (req, res) => {
  const limit = +req.query.limit || 10;
  const offset = +req.query.offset || 0;

  const users = await models.User.find().skip(offset).limit(limit);
  res.json(users);
});
