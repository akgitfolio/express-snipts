// cluster.js
const cluster = require('cluster');

// Create multiple worker processes
for (let i = 0; i < numWorkers; i++) {
  cluster.fork();
}

cluster.on('online', (worker) => {
  console.log(`Worker ${worker.process.pid} is online`);
});
