pipeline {
    agent any

    tools {
        nodejs 'nodejs-lts'  // ชื่อ Node.js ใน Jenkins Global Tool Configuration
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/solahuddeen02/simple-express-app.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('sonarcube-25.8.0') {  // ชื่อ SonarQube installation
                    sh 'npm install -g sonar-scanner'
                    sh 'npx sonar-scanner -Dsonar.projectKey=demo1'
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
    }
}

