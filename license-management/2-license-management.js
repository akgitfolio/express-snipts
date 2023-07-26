app.use(expressLicense());

app.on('error', (err) => {
  console.error(err);
});
