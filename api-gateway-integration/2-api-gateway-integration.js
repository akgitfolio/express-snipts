const params = {
  restApiId: 'YOUR_API_GATEWAY_ID',
  authorizers: {
    'myCustomAuthorizer': {
      type: 'TOKEN',
      authorizerUri: 'https://your-custom-authorizer-endpoint.com/verify',
      authorizerCredentials: 'YOUR_AUTHORIZER_CREDENTIALS',
    },
  },
};

apiGateway.updateRestApi(params, (err, data) => {
  if (err) throw err;
  console.log('Custom authorizer added successfully');
});
