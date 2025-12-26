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
  euonus,
  groot,
  AIFinance,
  GreenCart,
  RealEstate,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Artificial Intelligence",
    icon: creator,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Euonous",
    icon: euonus,
    iconBg: "#E6DEDD",
    date: "Dec 2024 - Jan 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Groot Technologies",
    icon: groot,
    iconBg: "#E6DEDD",
    date: "Aug 2025 - Dec 2025",
    points: [
      "Developed a Full Stack HR Management System with separate Admin and Employee dashboards.",
      "Built admin features to manage employees, attendance, leaves, departments, and holidays.",
      "Designed an employee portal for check-in/out, leave requests, and attendance tracking.",
      "Utilized Next.js, CSS, Node.js, Express.js, and Sequelize ORM for full-stack development.",
      "Integrated PostgreSQL for local storage and Supabase for real-time data synchronization.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI Finance Platform",
    description:
      "Web-based AI-powered finance platform that helps users track expenses, analyze spending patterns, and gain intelligent insights for better financial decisions.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "gemini-ai",
        color: "green-text-gradient",
      },
      {
        name: "prisma",
        color: "orange-text-gradient",
      },
    ],
    image: AIFinance,
    source_code_link: "https://github.com/manisha-13-code/AI-Finance-Platform",
  },
  {
    name: "GreenCart – Grocery Delivery Platform",
    description:
      "Full Stack grocery delivery web application that allows users to browse products, manage carts, and place orders with a seamless user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
    ],
    image: GreenCart,
    source_code_link: "https://github.com/manisha-13-code/Green-Cart",
  },
  {
    name: "Real Estate Platform",
    description:
      "Web-based real estate platform that enables users to explore property listings, view details, and connect with sellers through a clean and responsive interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: RealEstate,
    source_code_link: "https://github.com/manisha-13-code/Real-Estate",
  },
];


export { services, technologies, experiences, testimonials, projects };
