pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "learnify-app"
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Cloning repository...'
                git 'https://github.com/muneebaslam157/Learnify-Skillup.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t ${DOCKER_IMAGE}:latest .'
            }
        }

        stage('Run Container') {
            steps {
                echo 'Running container...'
                sh '''
                docker stop ${DOCKER_IMAGE} || true
                docker rm ${DOCKER_IMAGE} || true
                docker run -d -p 8081:8080 --name ${DOCKER_IMAGE} ${DOCKER_IMAGE}:latest
                '''
            }
        }

        stage('Post Build') {
            steps {
                echo 'Build completed successfully!'
            }
        }
    }

    post {
        failure {
            echo 'Build failed!'
        }
    }
}
