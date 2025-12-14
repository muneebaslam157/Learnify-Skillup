pipeline {
  agent any

  environment {
    APP_PORT = "5173"
    APP_URL  = "http://localhost:5173"
    PUBLIC_URL = "http://13.233.96.170:5173"
    TESTS_REPO = "https://github.com/muneebaslam157/learnify-selenium-tests.git"
    RECIPIENTS = "muneebaslam157@gmail.com"
  }

  stages {

    stage('Checkout App Repo (this repo)') {
      steps {
        echo "Checking out Learnify-Skillup (project repo)..."
        checkout scm
      }
    }

    stage('Checkout Selenium Tests Repo') {
      steps {
        echo "Cloning learnify-selenium-tests..."
        sh '''
          rm -rf selenium-tests || true
          git clone ${TESTS_REPO} selenium-tests
        '''
      }
    }

    stage('Build App Docker Image') {
      steps {
        echo "Building Docker image for Learnify app..."
        sh '''
          docker build -t learnify-skillup-image .
        '''
      }
    }

    stage('Run App Container') {
      steps {
        echo "Starting app container..."
        sh '''
          docker rm -f learnify-skillup-app || true
          docker run -d --name learnify-skillup-app -p ${APP_PORT}:${APP_PORT} learnify-skillup-image
          echo "Waiting for app to start..."
          sleep 20
        '''
      }
    }

    stage('Run Selenium Tests') {
      steps {
        echo "Running Selenium smoke tests..."
        sh '''
          cd selenium-tests
          python3 -m pip install --user -r requirements.txt
          export APP_URL=${APP_URL}
          python3 -m unittest -v tests.test_learnify
        '''
      }
    }
  }

  post {
    success {
      echo "All tests passed. Sending success email..."
      emailext(
        to: "${RECIPIENTS}",
        subject: "Learnify CI SUCCESS - Build #${BUILD_NUMBER}",
        mimeType: 'text/html',
        body: """
        <p>Hello Sir,</p>

        <p>The Learnify CI pipeline ran successfully on Jenkins (EC2).</p>

        <p>
        <b>Project Repository:</b> ${env.GIT_URL}<br/>
        <b>Branch:</b> ${env.GIT_BRANCH}<br/>
        <b>Build:</b> #${BUILD_NUMBER}<br/>
        <b>Status:</b> SUCCESS
        </p>

        <p>
        All 10 Selenium smoke tests passed against the Dockerized Learnify app.
        </p>

        <p>
        <b>Application URL:</b> <a href="${PUBLIC_URL}">${PUBLIC_URL}</a><br/>
        <b>Console Output:</b> <a href="${BUILD_URL}console">${BUILD_URL}console</a>
        </p>

        <p>
        Regards,<br/>
        <b>Muneeb Aslam</b><br/>
        FA22-BCS-077
        </p>
        """
      )
    }

    failure {
      echo "Some tests failed. Sending failure email..."
      emailext(
        to: "${RECIPIENTS}",
        subject: "Learnify CI FAILED - Build #${BUILD_NUMBER}",
        mimeType: 'text/html',
        body: """
        <p>Hello Sir,</p>

        <p>The Learnify CI pipeline failed on Jenkins (EC2).</p>

        <p>
        <b>Project Repository:</b> ${env.GIT_URL}<br/>
        <b>Branch:</b> ${env.GIT_BRANCH}<br/>
        <b>Build:</b> #${BUILD_NUMBER}<br/>
        <b>Status:</b> FAILED
        </p>

        <p>
        <b>Console Output:</b> <a href="${BUILD_URL}console">${BUILD_URL}console</a>
        </p>

        <p>
        Regards,<br/>
        <b>Muneeb Aslam</b><br/>
        FA22-BCS-077
        </p>
        """
      )
    }

    always {
      echo "Cleaning up app container..."
      sh 'docker rm -f learnify-skillup-app || true'
    }
  }
}

