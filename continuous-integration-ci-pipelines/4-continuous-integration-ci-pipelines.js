stage('Archive Artifacts') {
    steps {
        archiveArtifacts '**/*.tgz'
        downloadArtifacts 'artifacts/*.tgz' // Download for manual inspection
    }
}
