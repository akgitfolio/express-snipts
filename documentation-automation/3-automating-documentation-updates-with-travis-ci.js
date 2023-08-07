# .travis.yml
language: node_js
install:
  - npm install
script:
  - swagger-jsdoc -d . > docs/api.json
