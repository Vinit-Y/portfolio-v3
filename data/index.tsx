// import { title } from "process";

export const navItems = [
  { name: "Home", link: "/", iconName: "Home" },
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
    iconLists: ["/react.svg", "/supabase.svg", "/mapbox.svg", "nodejs.svg", "openai.svg", "twilio.svg"],
    link: "https://github.com/Vinit-Y/ICE_Tracker",
  },
  {
    id: 2,
    title: "Assignment Management System",
    des: "An Assignment Management System built with Node.js and Express.js, featuring user authentication, AWS and GCP infrastructure, Packer for image creation, GitHub Actions for CI/CD, Jest for testing, Winston logging, CSV processing for user accounts, and Sequelize for database management.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/Vinit-Y/webapp",
  },
  {
    id: 3,
    title: "GrubBites - Food Ordering App",
    des: "​GrubBites is an online food ordering platform designed to simplify the ordering process and enhance user experience. The application is built using React for the frontend, and Node.js, Express.js, and MongoDB for the backend. It integrates Stripe for secure payments and is deployed on Heroku.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/Vinit-Y/GrubBites",
  },
  {
    id: 4,
    title: "City Management System",
    des: "The City Management System is a Java-based app using Java Swing, MySQL, Hibernate, and JDBC to manage city services like employment, healthcare, and education. Built in IntelliJ IDEA and NetBeans, it applies object-oriented programming and data-driven solutions while addressing cost and privacy challenges.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/Vinit-Y/AED_FINAL_PROJECT",
  },
  { 
    id: 5,
    title: "Insurance-Plan-Service",
    des: "The project focuses on distributed systems and big data indexing. It uses Elasticsearch for efficient search and data indexing, Kibana for visualization and monitoring, and RabbitMQ for reliable message queuing and communication. The project simplifies deployment and management for scalable data processing.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],  // change to p5.svg
    link: "https://github.com/Vinit-Y/Insurance-Plan-Service",
  },
  {
    id: 6,
    title: "TechHub-E-commerce-App",
    des: "The TechHub E-commerce App is a computer sales platform built with ReactJS, Redux, Bootstrap, and SCSS for a dynamic UI, and ExpressJS with MongoDB for backend services. It integrates Stripe for secure payments and is deployed on Heroku, ensuring a seamless shopping experience.",
    img: "/p5.svg", // change to p5.svg
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],  // change to p5.svg
    link: "https://github.com/Vinit-Y/TechHub-E-commerce-App",
  },
  {
    id: 7,
    title: "FlashLearn - A Flashcard App",
    des: "Webapp designed to facilitate interactive learning through flashcards. The application provides users with the opportunity to enhance their knowledge of JavaScript or Java programming languages through engaging quizzes and scoring mechanisms.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/Vinit-Y/FlashLearn",
  },
  {
    id: 8,
    title: "Current Portfolio Website",
    des: "A modern and responsive portfolio website built with TypeScript, React, Next.js, Three.js, Tailwind CSS, Aceternity UI, Shadcn, Framer Motion, and Sentry.",
    img: "/p5.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/Vinit-Y/portfolio-v3",
  }
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
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