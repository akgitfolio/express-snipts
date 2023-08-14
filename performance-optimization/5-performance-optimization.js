const cluster = require('cluster');

if (cluster.isMaster) {
  // Fork worker processes
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  // Worker processes run your application code
  app.listen(port);
}
