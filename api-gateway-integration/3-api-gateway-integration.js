const { APIGateway } = require('aws-sdk');

const apiGateway = new APIGateway();

// Create API Gateway proxy
const params = {
  restApiId: 'YOUR_API_GATEWAY_ID',
  stageName: 'YOUR_STAGE_NAME',
  httpMethod: 'POST',
  resourcePath: '/your/path',
  integrationHttpMethod: 'POST',
  uri: 'http://localhost:3000/your/endpoint',
};

apiGateway.createIntegration(params, (err, data) => {
  if (err) throw err;
  console.log('API Gateway proxy created successfully');
});
