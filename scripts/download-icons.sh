#!/bin/bash

# Create skills directory if it doesn't exist
mkdir -p public/skills

# Function to download an icon
download_icon() {
  local name=$1
  local url=$2
  local output="public/skills/$name.svg"
  echo "Downloading $name icon..."
  curl -s "$url" -o "$output"
}

# Download programming language icons
download_icon "javascript" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
download_icon "typescript" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
download_icon "python" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
download_icon "java" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
download_icon "csharp" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
download_icon "cpp" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
download_icon "bash" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"

# Download web & build technology icons
download_icon "react" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
download_icon "nodejs" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
download_icon "redux" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
download_icon "ajax" "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/ajax.svg"
download_icon "angular" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
download_icon "webpack" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
download_icon "babel" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg"
download_icon "vite" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg"
download_icon "tailwind" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
download_icon "bootstrap" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
download_icon "sass" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
download_icon "winston" "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/winston.svg"

# Download framework & API design icons
download_icon "springboot" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
download_icon "dotnet" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg"
download_icon "express" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
download_icon "nextjs" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
download_icon "rest" "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/fastapi.svg"
download_icon "graphql" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"

# Download database icons
download_icon "postgresql" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
download_icon "mysql" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
download_icon "mongodb" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
download_icon "redis" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
download_icon "dynamodb" "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/amazondynamodb.svg"
download_icon "elasticsearch" "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/elasticsearch.svg"

# Download cloud & DevOps icons
download_icon "aws" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
download_icon "gcp" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
download_icon "azure" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
download_icon "docker" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
download_icon "kubernetes" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
download_icon "jenkins" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"
download_icon "github-actions" "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/githubactions.svg"
download_icon "terraform" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg"
download_icon "packer" "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/packer.svg"
download_icon "rabbitmq" "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/rabbitmq.svg"

# Download tools, software & testing icons
download_icon "shell" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
download_icon "postman" "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/postman.svg"
download_icon "github" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
download_icon "figma" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
download_icon "vscode" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
download_icon "eclipse" "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/eclipse.svg"
download_icon "intellij" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg"
download_icon "junit" "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/junit5.svg"
download_icon "selenium" "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/selenium.svg"
download_icon "jest" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
download_icon "kibana" "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/kibana.svg"
download_icon "sentry" "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/sentry.svg"
download_icon "firebase" "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
download_icon "supabase" "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/supabase.svg"

echo "All icons have been downloaded to public/skills/"
