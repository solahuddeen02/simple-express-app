pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                git 'https://github.com/solahuddeen02/simple-express-app.git'
                sh "npm install"
            }
        }

        stage('Scan') {
            steps {
                withSonarQubeEnv(installationName: 'sonarcube-25.8.0') {
                    sh "npm install sonar-scanner"
                    sh 'npx sonar-scanner -X -X -Dsonar.projectKey=demo1'
                }
            }
        }
    }
}
