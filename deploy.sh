#!/bin/bash

docker pull yourdockerhubusername/devops-app

docker stop devops-container || true
docker rm devops-container || true

docker run -d --name devops-container -p 8082:3000 yourdockerhubusername/devops-app
