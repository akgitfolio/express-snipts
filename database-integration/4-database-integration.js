pool.beginTransaction(async (err) => {
  if (err) { throw err; }

  try {
    await pool.query('UPDATE users SET age = age + 1 WHERE name = "John"');
    await pool.query('INSERT INTO logs (action, user) VALUES ("Updated John", "Admin")');
    pool.commit();
  } catch (err) {
    pool.rollback();
  }
});
