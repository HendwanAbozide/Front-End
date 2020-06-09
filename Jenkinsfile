pipeline {

    environment {
    registry = "hendwanabozide123/pacify-frontend"
    registryCredential = 'dockerhub'
    dockerImage = ''
    }

    agent any


    stages {

        stage('Cloning our Git') {
            
            steps {
                git 'https://github.com/HendwanAbozide/Front-End.git'
             }
        }



        stage('Build Docker Image'){
            steps{

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

    post{

        success{

            echo 'Build is successful'
        }

        failure {


            echo 'Build failed'
        }

    }


}

