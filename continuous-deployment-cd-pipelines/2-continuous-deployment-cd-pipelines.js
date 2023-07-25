#!/bin/bash

# Build the application
npm run build

# Package the application
tar -czvf build.tar.gz build

# Deploy to the target environment
scp build.tar.gz user@host:/path/to/deployment/directory

# Unpack and start the application
ssh user@host "cd /path/to/deployment/directory && tar -xzvf build.tar.gz && npm start"
