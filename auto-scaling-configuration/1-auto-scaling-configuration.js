// package.json
{
  "name": "my-express-app",
  "azureWebJobsAutoTrigger": {
    "enabled": true
  }
}

// .azurewebsites.json
{
  "autoscale": {
    "min-instances": 1,
    "max-instances": 5,
    "auto-heal": true
  }
}
