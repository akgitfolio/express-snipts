// package.json
{
  "devDependencies": {
    "aws-sdk": "^2.1140.0"
  },
  "scripts": {
    "start": "eb start"
  }
}

// ebconfig.config
[global]
autoscaling:
  # Minimum number of instances
  min_size: 1
  # Maximum number of instances
  max_size: 5
  # Health check interval
  healthcheck_interval: 5
