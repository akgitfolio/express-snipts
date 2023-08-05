const express = require('express');
const mysql = require('mysql');

const app = express();
const pool = mysql.createPool({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'mydb'
});
