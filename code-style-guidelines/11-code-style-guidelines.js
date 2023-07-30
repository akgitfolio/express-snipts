try {
  const user = await User.findById(req.params.id);
  res.send(user);
} catch (err) {
  res.status(500).send(err.message);
}
