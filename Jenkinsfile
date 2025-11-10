pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/muneebaslam157/Learnify-Skillup.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t learnify-skillup Learnify-Skillup/Learnify-Skillup/'
            }
        }
        stage('Run Container') {
            steps {
                sh 'docker run -d -p 8080:8080 learnify-skillup'
            }
        }
        stage('Post Build') {
            steps {
                echo 'Build complete!'
            }
        }
    }
}
