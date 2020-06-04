pipeline {

    agent any

    //     image 'node:12.17-alpine'
    //     args '-p 80:3000'
    
    // }
    environment {
        CI = 'true'
    }
    stages {

        stage('Build') {

            steps {
                sh 'npm install'
            }
        }
        // stage('Test') {
        //    steps {
        //         sh 'npm run build'
        //     }
        // }
        // stage('Deliver') {
        //     steps {

        //       sh 'npm start'
        //     }
        }
}

