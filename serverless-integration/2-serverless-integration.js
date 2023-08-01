// serverless.yml
service: express-app
framework: express

provider:
  name: aws
  runtime: nodejs14.x
  environment:
    NODE_ENV: production
