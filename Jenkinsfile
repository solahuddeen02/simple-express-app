pipeline {
    agent any

    tools {
        // กำหนด Node.js ถ้าจำเป็น
        nodejs 'nodejs-lts'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'feature/lab', url: 'https://github.com/solahuddeen02/simple-express-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('SonarQube Scan') {
            environment {
                // ต้องตั้งค่าใน Jenkins > Manage Jenkins > Configure System
                // เพิ่ม SonarQube server และใส่ชื่อที่นี่
                SONARQUBE = 'MySonarQube'
            }
            steps {
                withSonarQubeEnv('MySonarQube') {
                    sh '''
                        npx sonar-scanner \
                          -Dsonar.projectKey=simple-express-app \
                          -Dsonar.sources=. \
                          -Dsonar.host.url=http://<sonarqube-host>:9000 \
                          -Dsonar.login=<your_token>
                    '''
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
