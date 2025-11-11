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
        	sh 'docker build -t learnify-skillup .'
    	    }
	}
	stage('Run Container') {
    steps {
        sh '''
        docker stop learnify-skillup || true
        docker rm learnify-skillup || true
        docker run -d -p 3000:3000 --name learnify-skillup learnify-skillup
        '''
    }
}

        stage('Post Build') {
            steps {
                echo 'Build complete!'
            }
        }
    }
}
