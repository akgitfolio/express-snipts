language: node_js
cache:
  directories:
    - node_modules
script:
  - npm run test
  - npm run lint
