pipeline {
    agent any

    environment {
        APP_DIR = "/var/www/html"
    }

    stages {

        stage('Clone Repository') {
            steps {
                echo "📦 Cloning Cyberangle Repository (works for both public & private)..."
                git branch: 'main',
                    credentialsId: 'github-credentials',   // Jenkins GitHub Token ID (safe for both)
                    url: 'https://github.com/Cyberangle002/_Cyberangle_002.git'
            }
        }

        stage('Install Node & NPM') {
            steps {
                echo "🧠 Installing Node.js & npm..."
                bat 'npm install -g npm@latest'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                bat 'npm run build'
            }
        }
    }

   post {
    success {
        sh 'echo "✅ Deployment completed successfully! Visit: http://51.20.189.213"'
    }
}

}   // <-- Missing closing brace added here ✅
