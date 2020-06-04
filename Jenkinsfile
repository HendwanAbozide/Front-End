pipeline {
    agent {
        docker {
            image 'node:12.17-alpine' 
            args '-p 80:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
		
    }
}