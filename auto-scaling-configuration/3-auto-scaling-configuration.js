const cluster = require('cluster');
// Start cluster workers
if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  // Worker process
  const app = express();
  // Start Express application
  app.listen(port);
}
