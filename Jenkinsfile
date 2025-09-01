pipeline {
    agent {
        docker { image 'node:18' }
    }

    environment {
        SONARQUBE = credentials('sonar-token') // ใส่ชื่อ Credential ของคุณ
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
                withSonarQubeEnv('sq1') { // ชื่อ SonarQube ที่ตั้งค่าใน Jenkins
                    sh 'npx sonar-scanner -Dsonar.projectKey=mywebapp'
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 1, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
    }
}
