const errorObj = new Error('Custom error message');
errorObj.status = 404;

throw errorObj;
