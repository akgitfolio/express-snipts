// Dockerfile
FROM node:16

# Copy your Express.js application into the container
COPY . /app

# Start your Express.js application
CMD ["node", "app.js"]
