import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  microsoft,
  IBM,
  carrent,
  jobit,
  tripguide,
  threejs,
 
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
 
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Three JS",
    icon: threejs,
  },

];

const experiences = [
  {
    title: "Back-End Developer Professional Certificate",
    company_name: "meta",
    icon: meta,
    iconBg: "#E6DEDD",
   
    points: [
      "Gain the technical skills required to become a qualified back-end developer.",
      "Learn in-demand programming skills and how to confidently use code to solve problems.",
      " Learn to use programming systems including Python Syntax, Linux commands, Git, SQL, Version Control, Cloud Hosting, APIs, JSON, XML and more.",
    ],
  },
  {
    title: "Front-End Developer Professional Certificate",
    company_name: "meta",
    icon: meta,
    iconBg: "#E6DEDD",
   
    points: [
      "Learn to use React in relation to Javascript libraries and frameworks.",
      "Learn Bootstrap CSS Framework to create webpages and work with GitHub repositories and version control.",
      "HTML to structure content, CSS to handle visual style, and JavaScript to develop interactive experiences.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Introduction to Microsoft Azure Cloud Services",
    company_name: "Microsoft",
    icon: microsoft,
    iconBg: "#E6DEDD",
   
    points: [
      "Understand core cloud concepts including IaaS, PaaS, and SaaS within the Azure ecosystem.",
  "Explore core Azure services like Virtual Machines, App Services, and Azure Storage.",
  "Learn about Azure pricing, SLAs, and lifecycle management for cost-effective cloud solutions.",
    ],
  },
  {
    title: "Data Analyst Professional Certificate",
    company_name: "IBM",
    icon: IBM,
    iconBg: "#E6DEDD",

    points: [
  "Learn to analyze data using Excel, Python, and SQL across real-world datasets.",
  "Gain hands-on experience with data visualization tools like IBM Cognos and Python libraries such as Matplotlib and Seaborn.",
  "Develop skills in data wrangling, cleaning, and using Pandas to manipulate structured data.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "AI website Builder",
    description:
      "Developed a full-stack platform for AI-generated websites using React.js, Node.js, Express, & LLM, A real-time streaming interface for prompt responses with Web Containers and a file explorer UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://aibuilderwebsite.netlify.app/",
  },
  {
    name: "On-Demand Transportation App ",
    description:
      "Developing a full-featured ride-booking application using React, Node.js, Express, and MongoDB. Implemented real-time ride tracking, secure user authentication, and scalable APIs Designed a clean, responsive UI and integrated role-based access control",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Interactive Social Media",
    description:
      "Built an interactive 3D solar system simulation with realistic planetary orbits. Optimized rendering performance by 40%, improving FPS and reducing lag",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
