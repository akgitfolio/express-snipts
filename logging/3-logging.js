app.use(morgan('dev', {
  skip: (req, res) => {
    return res.statusCode < 400;
  }
}));
