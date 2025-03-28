import fs from 'fs';
import path from 'path';
import https from 'https';

// Create skills directory if it doesn't exist
const skillsDir = path.join(process.cwd(), 'public', 'skills');
if (!fs.existsSync(skillsDir)) {
  fs.mkdirSync(skillsDir, { recursive: true });
}

// Function to download an icon
function downloadIcon(name, url) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(skillsDir, `${name}.svg`);
    console.log(`Downloading ${name} icon...`);
    
    const file = fs.createWriteStream(filePath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete the file if there was an error
      reject(err);
    });
  });
}

// Define icon sources with more colorful alternatives
const icons = [
  // Programming Languages
  { name: 'javascript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'typescript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'csharp', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: 'cpp', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'bash', url: 'https://cdn.worldvectorlogo.com/logos/bash-1.svg' },
  
  // Web & Build Technologies
  { name: 'react', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'nodejs', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'redux', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'ajax', url: 'https://cdn.worldvectorlogo.com/logos/ajax-1.svg' },
  { name: 'angular', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { name: 'webpack', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg' },
  { name: 'babel', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg' },
  { name: 'vite', url: 'https://cdn.worldvectorlogo.com/logos/vitejs.svg' },
  { name: 'tailwind', url: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg' },
  { name: 'bootstrap', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'sass', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
  { name: 'winston', url: 'https://cdn.worldvectorlogo.com/logos/winston-2.svg' },
  
  // Frameworks & API Design
  { name: 'springboot', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'dotnet', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
  { name: 'express', url: 'https://cdn.worldvectorlogo.com/logos/express-109.svg' },
  { name: 'nextjs', url: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg' },
  { name: 'rest', url: 'https://cdn.worldvectorlogo.com/logos/rest-api.svg' },
  { name: 'graphql', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  
  // Databases
  { name: 'postgresql', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'mysql', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'mongodb', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'redis', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'dynamodb', url: 'https://cdn.worldvectorlogo.com/logos/aws-dynamodb.svg' },
  { name: 'elasticsearch', url: 'https://cdn.worldvectorlogo.com/logos/elasticsearch.svg' },
  
  // Cloud & DevOps
  { name: 'aws', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'gcp', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  { name: 'azure', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'kubernetes', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'jenkins', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
  { name: 'github-actions', url: 'https://cdn.worldvectorlogo.com/logos/github-actions-1.svg' },
  { name: 'terraform', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
  { name: 'packer', url: 'https://cdn.worldvectorlogo.com/logos/hashicorp-packer.svg' },
  { name: 'rabbitmq', url: 'https://cdn.worldvectorlogo.com/logos/rabbitmq.svg' },
  
  // Tools, Software & Testing
  { name: 'shell', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
  { name: 'postman', url: 'https://cdn.worldvectorlogo.com/logos/postman.svg' },
  { name: 'github', url: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg' },
  { name: 'figma', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'vscode', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'eclipse', url: 'https://cdn.worldvectorlogo.com/logos/eclipse-11.svg' },
  { name: 'intellij', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' },
  { name: 'junit', url: 'https://cdn.worldvectorlogo.com/logos/junit-5.svg' },
  { name: 'selenium', url: 'https://cdn.worldvectorlogo.com/logos/selenium-1.svg' },
  { name: 'jest', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
  { name: 'kibana', url: 'https://cdn.worldvectorlogo.com/logos/elastic-kibana.svg' },
  { name: 'sentry', url: 'https://cdn.worldvectorlogo.com/logos/sentry-3.svg' },
  { name: 'firebase', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'supabase', url: 'https://cdn.worldvectorlogo.com/logos/supabase-1.svg' }
];

// Download all icons
async function downloadAllIcons() {
  for (const icon of icons) {
    await downloadIcon(icon.name, icon.url);
  }
  console.log("All icons have been downloaded to public/skills/");
}

downloadAllIcons().catch(console.error);
