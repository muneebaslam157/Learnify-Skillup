pipeline {
  agent any

  environment {
    // Public URL (used in email + for reference)
    PUBLIC_APP_URL = "http://13.233.96.170:5173"

    // Local URL Jenkins uses to test inside EC2
    APP_URL = "http://localhost:5173"

    // Repos
    TESTS_REPO = "https://github.com/muneebaslam157/learnify-selenium-tests.git"

    // Docker
    IMAGE_NAME = "learnify-skillup-image"
    CONTAINER_NAME = "learnify-skillup-app"

    // Emails (keep existing two + add sir)
    EMAIL_TO = "muneebaslam497@gmail.com, muneebaslam157@gmail.com"
  }

  options {
    timestamps()
  }

  stages {

    stage('Checkout App Repo') {
      steps {
        echo "Checking out Learnify-Skillup (this repo)..."
        checkout scm
      }
    }

    stage('Checkout Tests Repo') {
      steps {
        echo "Cloning Selenium tests repo..."
        sh '''
          rm -rf selenium-tests
          git clone ${TESTS_REPO} selenium-tests
        '''
      }
    }

    stage('Build App Docker Image') {
      steps {
        echo "Building Docker image for Learnify app..."
        sh """
          docker build -t ${IMAGE_NAME}:latest .
        """
      }
    }

    stage('Run App Container') {
      steps {
        echo "Starting app container..."
        sh """
          docker rm -f ${CONTAINER_NAME} || true
          docker run -d --name ${CONTAINER_NAME} -p 5173:5173 ${IMAGE_NAME}:latest
          echo "Waiting for app to start..."
          sleep 12
        """
      }
    }

    stage('Run Selenium Tests') {
      steps {
        echo "Running Selenium tests against ${APP_URL} ..."
        sh '''
          cd selenium-tests
          python3 -m pip install --user -r requirements.txt
          export APP_URL=${APP_URL}
          python3 -m unittest -v tests.test_learnify | tee test_output.txt
        '''
      }
    }
  }

  post {
    always {
      echo "Cleaning up app container..."
      sh """
        docker rm -f ${CONTAINER_NAME} || true
      """
    }

    success {
      script {
        def output = sh(script: "cd selenium-tests && tail -n 120 test_output.txt || true", returnStdout: true).trim()

        emailext(
          to: "${EMAIL_TO}",
          subject: "Learnify CI SUCCESS - Build #${BUILD_NUMBER}",
          mimeType: 'text/html',
          body: """
            <h3>Learnify CI/CD Pipeline - SUCCESS</h3>
            <p><b>Job:</b> ${JOB_NAME}<br/>
               <b>Build:</b> #${BUILD_NUMBER}<br/>
               <b>App Link:</b> <a href="${PUBLIC_APP_URL}">${PUBLIC_APP_URL}</a>
            </p>

            <h4>Test Output (last lines)</h4>
            <pre style="background:#f4f4f4;padding:10px;border:1px solid #ddd;">${output}</pre>

            <p>In regards,<br/>
            <b>Muneeb Aslam</b><br/>
            FA22-BCS-077</p>
          """
        )
      }
    }

    failure {
      script {
        def output = sh(script: "cd selenium-tests && tail -n 200 test_output.txt || true", returnStdout: true).trim()

        emailext(
          to: "${EMAIL_TO}",
          subject: "Learnify CI FAILED - Build #${BUILD_NUMBER}",
          mimeType: 'text/html',
          body: """
            <h3>Learnify CI/CD Pipeline - FAILED</h3>
            <p><b>Job:</b> ${JOB_NAME}<br/>
               <b>Build:</b> #${BUILD_NUMBER}<br/>
               <b>App Link:</b> <a href="${PUBLIC_APP_URL}">${PUBLIC_APP_URL}</a>
            </p>

            <h4>Test Output (last lines)</h4>
            <pre style="background:#f4f4f4;padding:10px;border:1px solid #ddd;">${output}</pre>

            <p>In regards,<br/>
            <b>Muneeb Aslam</b><br/>
            FA22-BCS-077</p>
          """
        )
      }
    }
  }
}

