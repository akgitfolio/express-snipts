pipeline {
    agent any // Define the agent to run the pipeline on (e.g., macOS, Linux, Docker)

    stages {
        stage('Build') {
            steps {
                script {
                    sh 'npm install' // Install dependencies
                    sh 'npm run build' // Build the application
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    sh 'npm test' // Run the tests
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh 'npm run deploy' // Deploy the application
                }
            }
        }
    }
}
