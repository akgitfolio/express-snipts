const err = new Error('Something broke!');
Error.captureStackTrace(err, myAsyncFunction);
