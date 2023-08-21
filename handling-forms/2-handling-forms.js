// Import multer
const multer = require('multer');

// Create a multer storage engine
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// Create a multer upload instance
const upload = multer({ storage });

// Handle POST request to a file upload route
app.post('/upload-file', upload.single('avatar'), (req, res) => {
  // Access uploaded file in req.file
  const filename = req.file.filename;

  // Process uploaded file and send a response
  res.send(`File uploaded successfully! Filename: ${filename}`);
});
