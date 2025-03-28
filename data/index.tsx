export const navItems = [
  { name: "About", link: "#about", iconName: "User" },
  { name: "Education", link: "#education", iconName: "GraduationCap" },
  { name: "Experience", link: "#experience", iconName: "Briefcase" },
  { name: "Skills", link: "#skills", iconName: "Code2" },
  { name: "Projects", link: "#projects", iconName: "FolderGit2" },
  { name: "Resume", link: "/assets/resumes/resume.pdf", iconName: "FileText" },
  { name: "Contact", link: "#contact", iconName: "Mail" }
];

export const gridItems = [
  {
    id: 1,
    title: "Tech Stack: Always evolving, always improving",
    description: "I constantly try to improve",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "Currently based in Boston, MA",
    description: "Exploring opportunities across the US 🗽",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 4,
    title: "I prioritize collaboration, ensuring seamless communication and alignment.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "w-full h-full object-contain md:max-w-md md:mx-auto",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "",
  },
  {
    id: 5,
    title: "Passionate about building technology that streamlines workflows, boosts engagement, and drives innovation to create real impact and value.",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let’s connect! I’d love to chat and collaborate.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "ICE Tracker",
    des: "Building ICE Tracker: A heatmap of ICE arrests in Massachusetts with an AI-powered chatbot and call-based immigration assistance.",
    img: "/p1.png",
    iconLists: ["/projectSVG/react.svg", "/projectSVG/supabase.svg", "/projectSVG/mapbox.svg", "/projectSVG/nodejs.svg", "/projectSVG/chatgpt.svg", "/projectSVG/twilio.svg"],
    link: "https://github.com/Vinit-Y/ICE_Tracker",
  },
  {
    id: 2,
    title: "Assignment Management System",
    des: "An Assignment Management System built with Node.js and Express.js, featuring user authentication, AWS and GCP infrastructure, Packer for image creation, GitHub Actions for CI/CD, Jest for testing, Winston logging, CSV processing for user accounts, and Sequelize for database management.",
    img: "/p2.svg",
    iconLists: ["/projectSVG/javascript.svg", "/projectSVG/aws.svg", "/projectSVG/gcp.svg", "/projectSVG/jest.svg", "/projectSVG/sequelize.svg", "/projectSVG/terraform.svg"],
    link: "https://github.com/Vinit-Y/webapp",
  },
  {
    id: 3,
    title: "Current Portfolio Website",
    des: "A modern and responsive portfolio website built with TypeScript, React, Next.js, Three.js, Tailwind CSS, Aceternity UI, Shadcn, Framer Motion, and Sentry.",
    img: "/p5.svg",
    iconLists: ["/projectSVG/nextjs.svg", "/projectSVG/tailwindCSS.svg", "/projectSVG/typescript.svg", "/projectSVG/three.svg", "/projectSVG/framermotion.svg", "/projectSVG/sentry.svg"],
    link: "https://github.com/Vinit-Y/portfolio-v3",
  },  
  {
    id: 4,
    title: "GrubBites - Food Ordering App",
    des: "​GrubBites is an online food ordering platform designed to simplify the ordering process and enhance user experience. The application is built using React for the frontend, and Node.js, Express.js, and MongoDB for the backend. It integrates Stripe for secure payments and is deployed on Heroku.",
    img: "/p2.svg",
    iconLists: ["/projectSVG/mongodb.svg", "/projectSVG/express.svg", "/projectSVG/react.svg", "/projectSVG/nodejs.svg", "/projectSVG/stripe.svg"],
    link: "https://github.com/Vinit-Y/GrubBites",
  },
  {
    id: 5,
    title: "City Management System",
    des: "The City Management System is a Java-based app using Java Swing, MySQL,and JDBC to manage city services like employment, healthcare, and education. Built in IntelliJ IDEA and NetBeans, it applies object-oriented programming and data-driven solutions while addressing cost and privacy challenges.",
    img: "/p3.svg",
    iconLists: ["/projectSVG/java.svg", "/projectSVG/mysql.svg", "/projectSVG/netbeans.svg", "/projectSVG/intellij.svg"],
    link: "https://github.com/Vinit-Y/AED_FINAL_PROJECT",
  },
  { 
    id: 6,
    title: "Insurance-Plan-Service",
    des: "The project focuses on distributed systems and big data indexing. It uses Elasticsearch for efficient search and data indexing, Kibana for visualization and monitoring, and RabbitMQ for reliable message queuing and communication. The project simplifies deployment and management for scalable data processing.",
    img: "/p4.svg",
    iconLists: ["/projectSVG/elasticsearch.svg", "/projectSVG/kibana.svg", "/projectSVG/rabbitmq.svg", "/projectSVG/docker.svg", "/projectSVG/javascript.svg"], 
    link: "https://github.com/Vinit-Y/Insurance-Plan-Service",
  },
  {
    id: 7,
    title: "TechHub-E-commerce-App",
    des: "The TechHub E-commerce App is a computer sales platform built with ReactJS, Redux, Bootstrap, and SCSS for a dynamic UI, and ExpressJS with MongoDB for backend services. It integrates Stripe for secure payments and is deployed on Heroku, ensuring a seamless shopping experience.",
    img: "/p5.svg",
    iconLists: ["/projectSVG/bootstrap.svg", "/projectSVG/mongodb.svg", "/projectSVG/express.svg", "/projectSVG/react.svg", "/projectSVG/redux.svg", "/projectSVG/stripe.svg"],
    link: "https://github.com/Vinit-Y/TechHub-E-commerce-App",
  },
  {
    id: 8,
    title: "FlashLearn - A Flashcard App",
    des: "Webapp designed to facilitate interactive learning through flashcards. The application provides users with the opportunity to enhance their knowledge of JavaScript or Java programming languages through engaging quizzes and scoring mechanisms.",
    img: "/p4.svg",
    iconLists: ["/projectSVG/vite.svg", "/projectSVG/nodejs.svg", "/projectSVG/express.svg", "/projectSVG/react.svg"],
    link: "https://github.com/Vinit-Y/FlashLearn",
  },
];

export const education = [
  {
    id: 1,
    university: "Northeastern University",
    degree: "Master of Science in Information Systems",
    date: "January, 2023 - May, 2025",
    courses: "Application Engineering & Development, Web Design & User Experience Engineering, Object-Oriented Programming in Java, Network Structures & Cloud Computing, Program Structure & Algorithms, Wed Development Tools & Methods, Advanced Big-Data Applications and Indexing Techniques, Design Patterns",
    extracurriculars: "Graduate Student Government, Lead360",
    img: "/northeastern.png",
  },
  {
    id: 2,
    university: "University of Mumbai",
    degree: "Bachelor of Engineering in Computer Engineering",
    date: "August, 2018 - May, 2022",
    courses: "Structured Programming Approach, Operating Systems, Data Structures and Algorithms, Computer Graphics, Management Information System, Database Management System, Big Data Analytics, Artificial Intelligence and Soft Computing, Data Warehousing and Mining, and Machine Learning.",
    extracurriculars: "Computer Engineering Students’ Association - LTCE & COMPUTER SOCIETY OF INDIA - LTCE[CESA-CSI-LTCE], Institution's Innovation Council Student Council, and National Service Scheme.",
    img: "/mumbaiUniversity.png",
  },
];

// Skills interfaces
export interface Skill {
  name: string;
  icon: string;  // Path to skill icon
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

// Skills data
export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: "/skills/javascript.svg" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
      { name: "Python", icon: "/skills/python.svg" },
      { name: "Java", icon: "/skills/java.svg" },
      { name: "C#", icon: "/skills/csharp.svg" },
      { name: "C++", icon: "/skills/cpp.svg" },
      { name: "Bash", icon: "/skills/bash.svg" },
    ]
  },
  {
    title: "Web & Build Technologies",
    skills: [
      { name: "React.js", icon: "/skills/react.svg" },
      { name: "Node.js", icon: "/skills/nodejs.svg" },
      { name: "Redux", icon: "/skills/redux.svg" },
      { name: "AJAX", icon: "/skills/ajax.svg" },
      { name: "Angular", icon: "/skills/angular.svg" },
      { name: "Webpack", icon: "/skills/webpack.svg" },
      { name: "Babel", icon: "/skills/babel.svg" },
      { name: "Vite", icon: "/skills/vite.svg" },
      { name: "TailwindCSS", icon: "/skills/tailwind.svg" },
      { name: "Bootstrap", icon: "/skills/bootstrap.svg" },
      { name: "SASS", icon: "/skills/sass.svg" },
      { name: "Winston", icon: "/skills/winston.svg" }
    ]
  },
  {
    title: "Frameworks & API Design",
    skills: [
      { name: "Spring Boot", icon: "/skills/springboot.svg" },
      { name: ".Net", icon: "/skills/dotnet.svg" },
      { name: "Express.js", icon: "/skills/express.svg" },
      { name: "Next.js", icon: "/skills/nextjs.svg" },
      { name: "RESTful APIs", icon: "/skills/rest.svg" },
      { name: "GraphQL", icon: "/skills/graphql.svg" }
    ]
  },
  {
    title: "Databases & Indexing Engines",
    skills: [
      { name: "PostgreSQL", icon: "/skills/postgresql.svg" },
      { name: "MySQL", icon: "/skills/mysql.svg" },
      { name: "MongoDB", icon: "/skills/mongodb.svg" },
      { name: "Redis", icon: "/skills/redis.svg" },
      { name: "DynamoDB", icon: "/skills/dynamodb.svg" },
      { name: "Elasticsearch", icon: "/skills/elasticsearch.svg" }
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: "/skills/aws.svg" },
      { name: "GCP", icon: "/skills/gcp.svg" },
      { name: "Azure", icon: "/skills/azure.svg" },
      { name: "Docker", icon: "/skills/docker.svg" },
      { name: "Kubernetes", icon: "/skills/kubernetes.svg" },
      { name: "Jenkins", icon: "/skills/jenkins.svg" },
      { name: "GitHub Actions", icon: "/skills/github.svg" },
      { name: "Terraform", icon: "/skills/terraform.svg" },
      { name: "Packer", icon: "/skills/packer.svg" },
      { name: "RabbitMQ", icon: "/skills/rabbitmq.svg" }
    ]
  },
  {
    title: "Software, Tools & Testing",
    skills: [
      { name: "Shell Scripting", icon: "/skills/shell.svg" },
      { name: "Postman", icon: "/skills/postman.svg" },
      { name: "GitHub", icon: "/skills/github.svg" },
      { name: "Figma", icon: "/skills/figma.svg" },
      { name: "VS Code", icon: "/skills/vscode.svg" },
      { name: "Eclipse", icon: "/skills/eclipse.svg" },
      { name: "IntelliJ", icon: "/skills/intellij.svg" },
      { name: "JUnit", icon: "/skills/junit.svg" },
      { name: "Selenium", icon: "/skills/selenium.svg" },
      { name: "Jest", icon: "/skills/jest.svg" },
      { name: "Kibana", icon: "/skills/kibana.svg" },
      { name: "Sentry", icon: "/skills/sentry.svg" },
      { name: "Firebase", icon: "/skills/firebase.svg" },
      { name: "Supabase", icon: "/skills/supabase.svg" }
    ]
  }
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];