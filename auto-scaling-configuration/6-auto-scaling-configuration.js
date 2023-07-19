// package.json
{
  "name": "my-express-app",
  "env": {
    "K_SERVICE": "my-express-app",
    "K_REVISION": "my-express-app-v1"
  }
}

gcloud run deploy my-express-app \
  --memory=512Mi \
  --min-instances=1 \
  --max-instances=5 \
  --no-allow-unauthenticated
