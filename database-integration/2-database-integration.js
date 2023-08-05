const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({ name: String, age: Number });
const User = mongoose.model('User', UserSchema);

User.find({}, (err, users) => {
  if (err) { throw err; }
  console.log(users);
});
