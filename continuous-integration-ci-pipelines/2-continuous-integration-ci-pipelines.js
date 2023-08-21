stage('Build & Test') {
    parallel {
        stage('Build') {
            steps {
                // ... Build steps
            }
        }
        stage('Test') {
            steps {
                // ... Test steps
            }
        }
    }
}
