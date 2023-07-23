const params = {
  restApiId: 'YOUR_API_GATEWAY_ID',
  stageName: 'YOUR_STAGE_NAME',
  methodSettings: {
    '/{method}': {
      throttlingBurstLimit: 5,
      throttlingRateLimit: 10,
    },
  },
};

apiGateway.updateStage(params, (err, data) => {
  if (err) throw err;
  console.log('Throttling enabled successfully');
});
