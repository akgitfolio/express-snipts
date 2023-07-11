// app.js
const express = require('express');
const Sequelize = require('sequelize');

const app = express();

// Import the database connection and models
const sequelize = require('./db');
const User = require('./models/user');

// Register the User model with Sequelize
User.init(sequelize);
