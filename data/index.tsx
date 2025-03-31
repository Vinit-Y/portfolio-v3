import { FaLinkedin, FaGithub, FaGoogle } from "react-icons/fa";

export const navItems = [
  { name: "About", link: "#about", iconName: "User" },
  { name: "Education", link: "#education", iconName: "GraduationCap" },
  { name: "Experience", link: "#workExperience", iconName: "Briefcase" },
  { name: "Skills", link: "#skills", iconName: "Code2" },
  { name: "Projects", link: "#projects", iconName: "FolderGit2" },
  { name: "Approach", link: "#approach", iconName: "Compass" },
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
    img: "/projectSVG/p1.png",
    iconLists: ["/projectSVG/react.svg", "/projectSVG/supabase.svg", "/projectSVG/mapbox.svg", "/projectSVG/nodejs.svg", "/projectSVG/chatgpt.svg", "/projectSVG/twilio.svg"],
    link: "https://github.com/Vinit-Y/ICE_Tracker",
  },
  {
    id: 2,
    title: "Assignment Management System",
    des: "An Assignment Management System built with Node.js and Express.js, featuring user authentication, AWS and GCP infrastructure, Packer for image creation, GitHub Actions for CI/CD, Jest for testing, Winston logging, CSV processing for user accounts, and Sequelize for database management.",
    img: "/projectSVG/p2.png",
    iconLists: ["/projectSVG/javascript.svg", "/projectSVG/aws.svg", "/projectSVG/gcp.svg", "/projectSVG/jest.svg", "/projectSVG/sequelize.svg", "/projectSVG/terraform.svg"],
    link: "https://github.com/Vinit-Y/webapp",
  },
  {
    id: 3,
    title: "Current Portfolio Website",
    des: "A modern and responsive portfolio website built with TypeScript, React, Next.js, Three.js, Tailwind CSS, Aceternity UI, Shadcn, Framer Motion, and Sentry.",
    img: "/projectSVG/p3.png",
    iconLists: ["/projectSVG/nextjs.svg", "/projectSVG/tailwindCSS.svg", "/projectSVG/typescript.svg", "/projectSVG/three.svg", "/projectSVG/framermotion.svg", "/projectSVG/sentry.svg"],
    link: "https://github.com/Vinit-Y/portfolio-v3",
  },  
  {
    id: 4,
    title: "GrubBites - Food Ordering App",
    des: "​GrubBites is an online food ordering platform designed to simplify the ordering process and enhance user experience. The application is built using React for the frontend, and Node.js, Express.js, and MongoDB for the backend. It integrates Stripe for secure payments and is deployed on Heroku.",
    img: "/projectSVG/p4.png",
    iconLists: ["/projectSVG/mongodb.svg", "/projectSVG/express.svg", "/projectSVG/react.svg", "/projectSVG/nodejs.svg", "/projectSVG/stripe.svg"],
    link: "https://github.com/Vinit-Y/GrubBites",
  },
  {
    id: 5,
    title: "City Management System",
    des: "The City Management System is a Java-based app using Java Swing, MySQL,and JDBC to manage city services like employment, healthcare, and education. Built in IntelliJ IDEA and NetBeans, it applies object-oriented programming and data-driven solutions while addressing cost and privacy challenges.",
    img: "/projectSVG/p5.png",
    iconLists: ["/projectSVG/java.svg", "/projectSVG/mysql.svg", "/projectSVG/netbeans.svg", "/projectSVG/intellij.svg"],
    link: "https://github.com/Vinit-Y/AED_FINAL_PROJECT",
  },
  { 
    id: 6,
    title: "Insurance-Plan-Service",
    des: "The project focuses on distributed systems and big data indexing. It uses Elasticsearch for efficient search and data indexing, Kibana for visualization and monitoring, and RabbitMQ for reliable message queuing and communication. The project simplifies deployment and management for scalable data processing.",
    img: "/projectSVG/p6.png",
    iconLists: ["/projectSVG/elasticsearch.svg", "/projectSVG/kibana.svg", "/projectSVG/rabbitmq.svg", "/projectSVG/docker.svg", "/projectSVG/javascript.svg"], 
    link: "https://github.com/Vinit-Y/Insurance-Plan-Service",
  },
  {
    id: 7,
    title: "TechHub-E-commerce-App",
    des: "The TechHub E-commerce App is a computer sales platform built with ReactJS, Redux, Bootstrap, and SCSS for a dynamic UI, and ExpressJS with MongoDB for backend services. It integrates Stripe for secure payments and is deployed on Heroku, ensuring a seamless shopping experience.",
    img: "/projectSVG/p7.png",
    iconLists: ["/projectSVG/bootstrap.svg", "/projectSVG/mongodb.svg", "/projectSVG/express.svg", "/projectSVG/react.svg", "/projectSVG/redux.svg", "/projectSVG/stripe.svg"],
    link: "https://github.com/Vinit-Y/TechHub-E-commerce-App",
  },
  {
    id: 8,
    title: "FlashLearn - A Flashcard App",
    des: "Webapp designed to facilitate interactive learning through flashcards. The application provides users with the opportunity to enhance their knowledge of JavaScript or Java programming languages through engaging quizzes and scoring mechanisms.",
    img: "/projectSVG/p8.png",
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
    company: "Commonwealth Financial Network",
    position: "Software Engineer Co-op",
    date: "July 2024 - December 2024",
    location: "Waltham, MA",
    thumbnail: "/commonwealth.jpeg",
    description: `At Commonwealth Financial Network, I contributed to the company’s web modernization efforts by migrating over 800 advisor websites from Drupal to the FMG CMS platform, which helped streamline content updates and maintenance. I conducted quality assurance checks on more than 250 websites, identifying and resolving issues that improved site responsiveness and overall user experience. I ensured accessibility by adhering to WCAG/ADA standards, making the websites more inclusive for a wide range of users. I was involved in launching over 80 websites with GA4 analytics integration and backend connectivity using Spring Boot. Additionally, I implemented SEO enhancements through structured audits and keyword tuning. I worked closely with Agile Scrum teams, participated in sprint activities, and supported new hires by guiding them through CMS tools and QA workflows. For my contributions, I received the Shine On Award, recognizing my consistent effort and impact during the co-op term.`,
    image: "/ShineOnAward.png",
  },
  {
    id: 2,
    company: "Ram LLC",
    position: "Full Stack Developer",
    date: "May 2022 - December 2022",
    location: "Mumbai, India",
    thumbnail: "/fullstack.svg",
    description: `As a Full Stack Developer at Ram LLC, I worked on enhancing the security and performance of web applications by upgrading the authentication system from JWT to OAuth 2.0. I developed and integrated RESTful APIs using Node.js and Express, which improved backend performance and maintainability. I focused on optimizing database interactions using SQL performance techniques and deployed scalable solutions on Azure. I also contributed to DevOps automation by setting up CI/CD workflows with Docker and GitHub Actions, helping reduce release time. My role involved working with both .NET and Spring Boot frameworks to ensure the scalability and stability of enterprise applications.`,
  },
  {
    id: 3,
    company: "Ram LLC",
    position: "Web Development Intern",
    date: "July 2021 - April 2022",
    location: "Mumbai, India",
    thumbnail: "/webdev.svg",
    description: `During my internship at Ram LLC, I assisted in developing several web applications using HTML, CSS, JavaScript, and Node.js. I supported the design process by creating wireframes and mockups using Figma and Photoshop, which helped improve communication and reduce revisions during implementation. I also contributed to code optimization and accessibility enhancements that improved website performance. The internship followed Agile methodologies, and I successfully met timelines during development sprints, helping ensure consistent project delivery.`,
  },
];

export const socialMedia = [
  {
    id: 1,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/Vinit-Y",
    icon: FaLinkedin,
  },
  {
    id: 2,
    name: "GitHub",
    link: "https://github.com/Vinit-Y",
    icon: FaGithub,
  },
  {
    id: 4,
    name: "Google Cloud Skills Boost",
    link: "https://www.cloudskillsboost.google/public_profiles/5d83db01-d6e6-413f-b5c4-8767a4564ccd",
    icon: FaGoogle,
  },
];