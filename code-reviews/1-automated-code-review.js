// Code to be reviewed
app.get('/api/users', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.status(500).send({ error: err });
    } else {
      res.status(200).send({ data: users });
    }
  });
});
