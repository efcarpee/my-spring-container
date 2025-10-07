# my-spring-container

This project demonstrates a full-stack containerized microservice architecture using **Spring Boot** for the backend and **React** for the frontend, both deployed on **Kubernetes** via **Docker Desktop**. The Spring Boot service exposes RESTful endpoints with interactive API documentation using Swagger UI, while the React app consumes these APIs.

---

## 📌 Project Overview

The primary objectives of this project are to:

- Build and containerize a Spring Boot microservice using Java 17 and Gradle.
- Implement a basic REST API with CRUD operations.
- Add Swagger UI for automatic and interactive API documentation.
- Build a React frontend that communicates with the Spring Boot backend.
- Deploy both services locally using Kubernetes (`kubectl` + Docker Desktop).

---

## 🛠️ Technologies Used

### Backend
- Java 17
- Spring Boot (Spring Web)
- Gradle
- Springdoc OpenAPI (Swagger UI)
- Docker

### Frontend
- React
- Node.js / npm
- Docker

### DevOps / Deployment
- Docker Desktop
- Kubernetes (kubectl)
- YAML Manifests (Deployment + Service)

---

## 🗂️ Project Structure

my-spring-container/
├── k8s/
│ ├── react-deployment.yaml
│ ├── react-service.yaml
│ ├── spring-deployment.yaml
│ └── spring-service.yaml
├── react-app/
│ ├── Dockerfile
│ └── (React frontend files)
├── src/
│ └── main/java/com/example/demo/ItemController.java
├── build.gradle
├── README.md
└── ...

yaml
Copiar código

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/efcarpee/my-spring-container.git
cd my-spring-container
2. Build the Spring Boot Docker Image
bash
Copiar código
./gradlew bootBuildImage
This will generate a Docker image for the backend using bootBuildImage, which uses the Paketo Buildpacks system.

3. Build the React Docker Image
bash
Copiar código
docker build -t my-react-app:v1.0.0 -f react-app/Dockerfile react-app
Make sure you're in the root folder when running this command. The image must be named exactly my-react-app:v1.0.0 to match the Kubernetes manifest.

4. Deploy to Kubernetes (via Docker Desktop)
Ensure Docker Desktop has Kubernetes enabled.

bash
Copiar código
cd k8s
kubectl apply -f spring-deployment.yaml
kubectl apply -f spring-service.yaml
kubectl apply -f react-deployment.yaml
kubectl apply -f react-service.yaml
5. Port Forward the React App
Once all pods are running, port forward the React service:

bash
Copiar código
kubectl port-forward service/react-service 3000:3000
Open your browser and go to: http://localhost:3000

6. Access Swagger UI for Backend
Port forward the Spring Boot backend if needed:

bash
Copiar código
kubectl port-forward service/spring-service 8080:8080
Visit: http://localhost:8080/swagger-ui.html

✅ Features
RESTful API with GET, POST, PUT, DELETE endpoints.

Swagger UI integration for live API documentation.

React-based UI consuming backend services.

Local Kubernetes deployment using kubectl.

Docker image builds for both frontend and backend.
