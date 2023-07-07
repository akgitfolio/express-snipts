app.use(fileupload({
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.includes('image')) {
      cb(new Error('Only image files are allowed!'), false);
    } else {
      cb(null, true);
    }
  }
}));
