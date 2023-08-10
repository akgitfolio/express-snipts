const cluster = require('cluster');

if (cluster.isMaster) {
  // Fork worker processes
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  // Worker processes
  const app = express();

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.listen(3000);
}
