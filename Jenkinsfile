pipeline {

    // agent any
//////////////////////////////////////////
    environment {
    registry = "hendwanabozide123/pacify-frontend"
    registryCredential = 'dockerhub'
    dockerImage = ''
    }

    agent any
    // agent { dockerfile true }

    //////////////////////////////////////
    // tools {nodejs "mynode3"}
    

    // agent {

    //     docker{
    //         image 'node:12.17-alpine'
    //         args '-p 3000:3000'

    //     }
        
    // }

    // environment {
    //     CI = 'true'
    // }

    stages {

        stage('Cloning our Git') {
            
            steps {
                git 'https://github.com/HendwanAbozide/Front-End.git'
             }
        }

        stage('Testing build'){
            steps {

             sh 'node --version'
            }
        }


        stage('Package'){
            steps {

             sh 'node package -DskipTests'
            }
        } 


        stage('Build Docker Image'){
            steps{

                // "docker build -t hendwanabozide123/pacify-frontend:$env.Build_TAG"
                script{

                    dockerImage=docker.build registry + ":$BUILD_TAG"

                }

            }


         }
        stage('Push Docker Image'){
            steps{

                script{

                    docker.withRegistry('','dockerhub'){

                        dockerImage.push();
                        // dockerImage.push('latest');
                    }
                }
            }

        }
    }
        // stage('Cleaning up'){
        //     steps{


        //         // "docker build -t hendwanabozide123/pacify-frontend:$env.Build_TAG"
        //         sh "docker rmi $registry:$BUILD_NUMBER"

        //     }

        // }

/////////////////////////////////

    // stages {
    //     stage('Build') {
    //         steps {
    //             sh 'npm install'
    //         }
    //     }
        
    //     stage('Development Stage') {

    //         steps {
    //              echo 'development stage started'
    //              sh'chmod u+r+x development.sh'
    //              sh './development.sh'
    //              input message: 'Finished using the web site? (Click "Proceed" to continue)'
    //              sh'chmod u+r+x kill.sh'
    //              sh './kill.sh'
                
    //         }
    //     }

    //     stage('Production Stage') {

    //         steps {
    //              echo 'production stage started'

    //              sh'chmod u+r+x production.sh'
    //              sh './production.sh'
    //              input message: 'Finished using the web site? (Click "Proceed" to continue)'
    //              sh'chmod u+r+x kill.sh'
    //              sh './kill.sh'
                
    //         }
    //     }
    //     // stage('start') {
    //     //     steps {
    //     //         sh 'npm start'
    //     //     }
    //     // }
    // }

    post{

        success{

            echo 'yesssssss'
        }

        failure {


            echo 'noooooo'
        }

    }


}

