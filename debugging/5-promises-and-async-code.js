const asyncStacktrace = require('async-stacktrace');

// Wrap an async function in a try-catch block
async function myAsyncFunction() {
  try {
    // ...
  } catch (err) {
    // Print the stack trace with async-stacktrace
    console.error(asyncStacktrace.format(err));
  }
}
