const express = require("express");
const app = express();

app.get("/users", async (req, res) => {
  const users = await models.User.find();
  res.json(users);
});
