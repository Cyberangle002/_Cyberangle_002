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
                echo "🧠 Installing Node.js & npm..."
                sh '''
                    if ! command -v node >/dev/null 2>&1; then
                        curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
                        sudo apt install -y nodejs
                    fi
                    node -v
                    npm -v
                '''
            }
        }
        stage('Install Dependencies') {
            steps {
                echo "📦 Running npm install..."
                sh 'npm install'
            }
        }
        stage('Build Project') {
            steps {
                echo "🏗️ Building the website..."
                sh 'npm run build || echo "No build script found, using static site files."'
            }
        }
        stage('Install Nginx') {
            steps {
                echo "🌐 Installing Nginx..."
                sh '''
                    if ! command -v nginx >/dev/null 2>&1; then
                        sudo apt update
                        sudo apt install -y nginx
                    fi
                    sudo systemctl enable nginx
                    sudo systemctl start nginx
                '''
            }
        }
        stage('Deploy to Nginx') {
            steps {
                echo "🚀 Deploying build to /var/www/html ..."
                sh '''
                    sudo rm -rf ${APP_DIR}/*
                    if [ -d "build" ]; then
                        sudo cp -r build/* ${APP_DIR}/
                    else
                        sudo cp -r * ${APP_DIR}/
                    fi
                    sudo systemctl restart nginx
                '''
            }
        }
    }
    post {
        success {
            echo "🎉 Deployment Successful! Visit your server's public IP to view the site."
        }
        failure {
            echo "❌ Deployment Failed! Check Jenkins logs for errors."
        }
    }
}
