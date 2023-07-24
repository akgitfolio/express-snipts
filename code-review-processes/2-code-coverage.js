// Code coverage using Istanbul
const istanbull = require('istanbul');
const instrumenter = new Istanbul.Instrumenter();
instrumenter.instrumentSync('path/to/my-function.js');
