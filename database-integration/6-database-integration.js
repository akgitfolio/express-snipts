const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  const db = client.db('mydb');
  const users = db.collection('users');

  users.find({}).toArray((err, users) => {
    if (err) { throw err; }
    console.log(users);
  });
});
