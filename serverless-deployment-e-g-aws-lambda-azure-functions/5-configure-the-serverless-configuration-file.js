# serverless.yml
service: my-serverless-app
provider:
  name: aws
  runtime: nodejs14.x
functions:
  hello:
    handler: handler.handler
