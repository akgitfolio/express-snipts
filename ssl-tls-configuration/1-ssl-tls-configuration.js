const options = {
  key: privateKey,
  cert: [
    fs.readFileSync('./certificate.crt'),
    fs.readFileSync('./intermediate.crt'),
    fs.readFileSync('./root.crt'),
  ],
};
