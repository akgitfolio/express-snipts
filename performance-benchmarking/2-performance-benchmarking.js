const bench = require('benchmarker');

bench
  .suite('Middleware')
  .add('logger', () => app.use(logger()))
  .add('bodyParser', () => app.use(bodyParser.json()));

bench
  .suite('Requests')
  .add('GET /', () => request.get('/'))
  .add('POST /', () => request.post('/'));

bench.run();
