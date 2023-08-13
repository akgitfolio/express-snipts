const limiter1 = rateLimit({
  ...
});

// Apply limiter1 to '/api/orders' route only
app.use('/api/orders', limiter1);

const limiter2 = rateLimit({
  ...
});

// Apply limiter2 to everything else
app.use(limiter2);
