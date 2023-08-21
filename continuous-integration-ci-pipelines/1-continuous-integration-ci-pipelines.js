stage('Notify Slack') {
    steps {
        slackSend channel: '#dev-team', color: '#00FF00', message: "CI Pipeline for project ${params.project} completed successfully!"
    }
}
