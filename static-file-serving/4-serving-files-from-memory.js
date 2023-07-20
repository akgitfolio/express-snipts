const sendfile = require('sendfile');
app.get('/image.png', (req, res) => {
  sendfile(req, res, {path: './public/image.png'});
});
