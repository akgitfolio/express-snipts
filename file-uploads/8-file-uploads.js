const path = require('path');

req.files.image.mv(path.join(__dirname, 'uploads', 'image.jpg'), (err) => {
  if (err) {
    console.log(err);
    return;
  }

  // File saved successfully
});
