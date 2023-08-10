const mysql = require('mysql');

const dbConfig = {
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: '',
  database: 'my_db',
  replication: {
    host: '127.0.0.2',
    port: 3306,
    user: 'root',
    password: '',
    database: 'my_db'
  }
};

const pool = mysql.createPool(dbConfig);

pool.getConnection((err, connection) => {
  if (err) throw err;

  // Execute query on the replica
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;

    console.log(results);
    connection.release();
  });
});
