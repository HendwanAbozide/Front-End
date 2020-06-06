pipeline {

    // agent any
    
    agent { dockerfile true }
    // tools {nodejs "mynode3"}
    

    // agent {

    //     docker{
    //         image 'node:12.17-alpine'
    //         args '-p 3000:3000'

    //     }
        
    // }

    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'chown -R 111:116 "/.npm"'
                sh 'npm install'
            }
        }
        
        stage('Development Stage') {

            steps {
                 echo 'development stage started'
                 sh'chmod u+r+x development.sh'
                 sh './development.sh'
                 input message: 'Finished using the web site? (Click "Proceed" to continue)'
                 sh'chmod u+r+x kill.sh'
                 sh './kill.sh'
                
            }
        }

        stage('Production Stage') {

            steps {
                 echo 'production stage started'

                 sh'chmod u+r+x production.sh'
                 sh './production.sh'
                 input message: 'Finished using the web site? (Click "Proceed" to continue)'
                 sh'chmod u+r+x kill.sh'
                 sh './kill.sh'
                
            }
        }
        // stage('start') {
        //     steps {
        //         sh 'npm start'
        //     }
        // }
    }

    post{

        success{

            echo 'yesssssss'
        }

        failure {


            echo 'noooooo'
        }

    }



}

