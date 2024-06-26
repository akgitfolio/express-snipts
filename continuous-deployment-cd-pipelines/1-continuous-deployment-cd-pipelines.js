# .circleci/config.yml

version: 2.1

jobs:
  build:
    docker:
      - image: circleci/node:14
    steps:
      - checkout
      - run: npm install
      - run: npm test
  deploy:
    docker:
      - image: circleci/node:14
    steps:
      - checkout
      - run: npm run deploy
