const cluster = require('cluster');

if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  const app = express();

  // ... Your Express.js application code ...

  app.listen(port);
}
