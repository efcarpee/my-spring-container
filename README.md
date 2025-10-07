#my-spring-container

This project is a containerized full-stack application consisting of a Spring Boot backend and a React frontend. It demonstrates how to develop, document, containerize, and deploy microservices using Docker and Kubernetes within a local development environment.

Project Overview

The primary objectives of this project are:

Develop a Spring Boot microservice with basic CRUD operations.

Document the REST API using Swagger UI (OpenAPI).

Build a frontend in React that communicates with the backend.

Containerize both backend and frontend using Docker.

Deploy and expose both services via a local Kubernetes cluster.

Technologies Used
Backend

Java 17

Spring Boot (Spring Web)

Gradle

Springdoc OpenAPI

Frontend

React (Create React App)

JavaScript (ES6)

Infrastructure

Docker

Kubernetes (via Docker Desktop)

kubectl CLI tool

Project Structure
my-spring-container/
├── react-app/                    # React frontend
│   ├── src/
│   ├── public/
│   ├── build/
│   └── Dockerfile
├── src/main/java/com/example/demo/
│   ├── DemoApplication.java      # Spring Boot application entry point
│   └── ItemController.java       # REST controller
├── k8s/                          # Kubernetes manifests
│   ├── spring-deployment.yaml
│   ├── spring-service.yaml
│   ├── react-deployment.yaml
│   └── react-service.yaml
├── build.gradle
├── settings.gradle
└── README.md

Prerequisites

Before proceeding, ensure the following tools are installed and configured:

Java 17

Node.js
 and npm

Docker Desktop
 with Kubernetes enabled

kubectl
 CLI

Setup Instructions
Step 1: Clone the Repository
git clone https://github.com/<your-username>/my-spring-container.git
cd my-spring-container

Step 2: Build the Spring Boot Backend
./gradlew bootBuildImage --imageName=my-spring-app:v1.0.0


This uses Cloud Native Buildpacks
 to generate a Docker image from your Spring Boot application.

Step 3: Build the React Frontend
cd react-app
npm install
npm run build
docker build -t my-react-app:v1.0.0 .
cd ..


This builds the production version of the React app and creates a Docker image using the Dockerfile inside the react-app/ directory.

Step 4: Deploy to Kubernetes

Apply the deployment and service YAML files:

kubectl apply -f k8s/spring-deployment.yaml
kubectl apply -f k8s/spring-service.yaml

kubectl apply -f k8s/react-deployment.yaml
kubectl apply -f k8s/react-service.yaml

Step 5: Verify Kubernetes Resources

Check the status of pods and services:

kubectl get pods
kubectl get services


Ensure all pods show STATUS=Running.

Step 6: Port Forward Services

In two separate terminals, run:

kubectl port-forward service/spring-service 8080:8080
kubectl port-forward service/react-service 3000:3000

Step 7: Access the Application

Open the frontend: http://localhost:3000

Open the API documentation: http://localhost:8080/swagger-ui.html

Troubleshooting Tips

If pods are stuck in Pending or show ImagePullBackOff, ensure the Docker image exists locally and imagePullPolicy: Never is set in your YAML.

Rebuild images and delete the old pods if necessary:

docker build -t my-react-app:v1.0.0 .
docker build -t my-spring-app:v1.0.0 .
kubectl delete pod <pod-name>

Cleaning Up

To remove the deployments and services:

kubectl delete -f k8s/react-service.yaml
kubectl delete -f k8s/react-deployment.yaml
kubectl delete -f k8s/spring-service.yaml
kubectl delete -f k8s/spring-deployment.yaml
