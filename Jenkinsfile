pipeline {

    agent any
    tools {nodejs "mynode3"}
    
    // agent {
        
    //     docker {

    //         // label 'mydocker'
    //         // image 'node:12.17'
    //         args '-p 3000:3000'
    //     }
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
        
        stage('Development Stage') {

            steps {

                 sh'chmod u+r+x deliver.sh'
                 sh './deliver.sh'
                 input message: 'Finished using the web site? (Click "Proceed" to continue)'
                 sh'chmod u+r+x kill.sh'
                 sh './kill.sh'
                
            }
        }

        stage('Production Stage') {

            steps {

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

