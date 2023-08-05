pool.query('SELECT * FROM users WHERE name = "John"', (err, rows) => {
  if (err) throw err;
  console.log(rows);
});
