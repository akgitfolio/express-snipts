version: '3.9'

services:
  express-app:
    build: .
    ports:
      - "3000:3000"
