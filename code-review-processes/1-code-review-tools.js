# GitLab CI/CD configuration
code_quality:
  stage: test
  script:
    - npm run lint
    - npm run test
