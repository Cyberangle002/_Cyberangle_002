pipeline {
    agent any
    environment {
        APP_DIR = "/var/www/html"
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo "✅ Cloning repository from GitHub..."
                git branch: 'main', url: 'https://github.com/Cyberangle002/_Cyberangle_002.git'
            }
        }

        stage('Install Node & NPM') {
            steps {
                echo "🧠 Checking Node.js & npm versions..."
                script {
                    if (isUnix()) {
                        sh 'node -v'
                        sh 'npm -v'
                    } else {
                        bat 'node -v'
                        bat 'npm -v'
                    }
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "📦 Installing dependencies..."
                script {
                    if (isUnix()) {
                        sh 'npm install'
                    } else {
                        bat 'npm install'
                    }
                }
            }
        }

        stage('Build Project') {
            steps {
                echo "🏗 Building project..."
                script {
                    if (isUnix()) {
                        sh 'npm run build'
                    } else {
                        bat 'npm run build'
                    }
                }
            }
        }

        stage('Deploy Project') {
            steps {
                echo "🚀 Deploying project..."
                script {
                    if (isUnix()) {
                        sh 'sudo cp -r build/* /var/www/html/'
                    } else {
                        bat 'xcopy /E /I /Y build C:\\inetpub\\wwwroot\\cyberangle_frontend'
                    }
                }
            }
        }
    }

    post {
        success {
            echo "✅ Deployment Completed Successfully!"
        }
        failure {
            echo "❌ Deployment Failed! Check Jenkins logs for details."
        }
    }
}

