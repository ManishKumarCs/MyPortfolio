// All portfolio content — recruiter-focused, ATS-friendly copy
export const profile = {
  name: "Manish Kumar",
  firstName: "Manish",
  title: "Software Engineer",
  headline: "Software Engineer — Full Stack & Test Automation",
  roles: [
    "Full Stack Developer.",
    "Backend Engineer (Java · Spring Boot).",
    "SDET & Automation Engineer.",
    "MERN Stack Developer.",
  ],
  valueProp:
    "I design scalable full-stack systems and build automation frameworks that ship reliable, production-ready software.",
  intro:
    "I build scalable web applications and robust test automation frameworks that solve real business problems. With hands-on experience across Java, Spring Boot, React, Node.js, and Selenium, I focus on secure, maintainable software while continuously improving performance, quality, and user experience.",
  location: "Aligarh, Uttar Pradesh, India",
  email: "manishprajapati.cs1@gmail.com",
  phone: "+91-8191994215",
  website: "https://manishdev.xyz",
  github: "https://github.com/ManishKumarCs",
  linkedin: "https://www.linkedin.com/in/manishkumarcs1",
  resume: "/ManishKumar_Resume.pdf",
  availability: "Open to Full-Time & SDE / SDET roles",
};

export const heroBadges = [
  "Software Engineer @ Cognizant",
  "Java · Spring Boot",
  "MERN Stack",
  "Selenium · SDET",
  "300+ DSA Solved",
];

export const heroStats = [
  { value: 300, suffix: "+", label: "DSA Problems Solved" },
  { value: 3, suffix: "", label: "Production Projects" },
  { value: 25, suffix: "+", label: "Automated Test Cases" },
  { value: 8, suffix: ".48", label: "CGPA / 10", raw: true },
];

export const manifesto = [
  {
    n: "01",
    title: "Engineering with intent",
    body: "Great software isn't just working code — it's understanding users, designing scalable architecture, and writing code the next engineer can trust. I optimise for clarity and maintainability, not cleverness.",
  },
  {
    n: "02",
    title: "Quality is not a phase",
    body: "My SDET background means I think about reliability from day one. I build features and the automated tests that protect them — Selenium, TestNG, Cucumber, REST Assured — so releases stay confident.",
  },
  {
    n: "03",
    title: "Full lifecycle ownership",
    body: "From designing REST APIs and building frontend interfaces to automating tests and deploying to production, I contribute across the complete SDLC and adapt fast to new codebases and teams.",
  },
  {
    n: "04",
    title: "Always compounding",
    body: "300+ DSA problems and constant learning keep my problem-solving sharp. I'm currently going deeper into Docker, CI/CD, and system design to build for scale.",
  },
];

export const whyHireMe = [
  "Dual strength: builds production features and the automation that protects them (SDET + Full Stack).",
  "Ships secure backends — JWT auth, RBAC, and clean REST API design across Java & Node.",
  "Delivered 3 end-to-end applications across healthcare, HR, and e-commerce domains.",
  "Built UI & API automation frameworks from scratch, automating 25+ regression cases.",
  "Strong CS fundamentals — 300+ DSA problems, 8.48 CGPA.",
  "Agile team experience with JIRA, sprint planning, and cross-team collaboration.",
];

export const howIBuild = [
  { step: "Requirements", desc: "Clarify the business problem, users, and acceptance criteria before writing code.", icon: "ClipboardList" },
  { step: "Design", desc: "Model data, define REST contracts, and choose a scalable, maintainable architecture.", icon: "PenTool" },
  { step: "Implement", desc: "Write clean, modular code with security (JWT, RBAC) and performance in mind.", icon: "Code2" },
  { step: "Test", desc: "Automate UI & API coverage — Selenium, TestNG, REST Assured, BDD with Cucumber.", icon: "ShieldCheck" },
  { step: "Deploy", desc: "Ship to production, monitor, and iterate based on real feedback.", icon: "Rocket" },
];

export const skillGroups = [
  {
    category: "Backend",
    icon: "Server",
    span: "md:col-span-2",
    skills: ["Java", "Spring Boot", "Node.js", "Express.js", "REST APIs", "JWT Auth", "Hibernate / JPA", "Spring Security"],
  },
  {
    category: "Frontend",
    icon: "Layout",
    span: "md:col-span-2",
    skills: ["React.js", "Next.js", "Angular", "Redux", "Tailwind CSS", "Bootstrap", "JavaScript", "HTML / CSS"],
  },
  {
    category: "Testing / SDET",
    icon: "TestTube2",
    span: "md:col-span-2",
    skills: ["Selenium", "TestNG", "REST Assured", "Cucumber (BDD)", "Postman", "API Testing", "Regression", "Smoke / Sanity"],
  },
  {
    category: "Databases",
    icon: "Database",
    span: "md:col-span-1",
    skills: ["MongoDB", "MySQL"],
  },
  {
    category: "DevOps & Tools",
    icon: "GitBranch",
    span: "md:col-span-2",
    skills: ["Git", "GitHub", "Maven", "JIRA", "Vercel", "Netlify", "Render", "VS Code"],
  },
  {
    category: "Concepts",
    icon: "Cpu",
    span: "md:col-span-1",
    skills: ["OOP", "DSA", "Agile / Scrum", "MVC", "RBAC"],
  },
];

export const experience = [
  {
    company: "Cognizant",
    role: "Programmer Analyst Trainee",
    period: "March 2026 — July 2026",
    location: "Coimbatore, India",
    summary:
      "Worked on enterprise Java, Spring Boot, Angular, and test automation while contributing to a healthcare application in an Agile environment.",
    points: [
      "Built a UI automation framework from scratch using Selenium, TestNG, and Cucumber (BDD).",
      "Developed REST API automation using REST Assured for backend service validation.",
      "Automated 25+ regression test cases across UI and API layers, improving release confidence.",
      "Contributed to the development of a Blood Management System using Spring Boot and Angular.",
      "Led the project team by coordinating development tasks, facilitating technical discussions, and ensuring timely project delivery.",
      "Managed project dependencies with Maven and collaborated using Agile methodologies and JIRA.",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Angular",
      "Selenium",
      "REST Assured",
      "TestNG",
      "Cucumber",
      "Maven",
      "JIRA",
      "Agile",
    ],
    impact: "Led project delivery & automated 25+ test cases",
  },

  {
    company: "Devslane Pvt. Ltd.",
    role: "Full Stack Web Developer Intern",
    period: "June 2024 — September 2024",
    location: "Noida, India",
    summary:
      "Developed and deployed MERN stack applications for real-world clients with secure authentication and scalable backend APIs.",
    points: [
      "Built full-stack web applications using React.js, Node.js, Express.js, and MongoDB.",
      "Implemented JWT-based authentication with role-based access control (RBAC).",
      "Designed and integrated RESTful APIs for client-facing applications.",
      "Collaborated with senior developers to deliver production-ready features on schedule.",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST APIs",
      "Tailwind CSS",
      "Git",
    ],
    impact: "Delivered production-ready MERN applications",
  },

  {
    company: "Bluestock Fintech",
    role: "Software Development Engineer Intern",
    period: "January 2024 — March 2024",
    location: "Remote",
    summary:
      "Worked on full-stack web development, contributing to scalable features while following Agile software development practices.",
    points: [
      "Developed responsive frontend components using React.js and modern JavaScript.",
      "Built and integrated RESTful APIs for seamless frontend-backend communication.",
      "Collaborated with mentors and developers using Git and GitHub for version control.",
      "Participated in Agile development, code reviews, debugging, and feature implementation.",
    ],
    tech: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Git",
      "GitHub",
      "REST APIs",
      "Agile",
    ],
    impact: "Successfully completed SDE internship",
  },
];

export const projects = [
  {
    id: "mediconnect",
    name: "MediConnect",
    tagline:
      "A healthcare management system connecting doctors, patients, and administrators.",
    image:
      "/mediconnect.png",
    problem:
      "Clinics need a secure way to manage appointments, prescriptions, and role-specific access without exposing sensitive patient data.",
    solution:
      "Built a full-stack healthcare platform with Spring Boot and Angular featuring appointment booking, prescription management, doctor approval workflows, and role-based dashboards secured with Spring Security, JWT, and BCrypt.",
    features: [
      "Appointment Booking",
      "Prescription Management",
      "Doctor Approval Workflow",
      "Admin, Doctor & Patient Dashboards",
      "Role-Based Authentication",
      "JWT + BCrypt Security",
      "REST APIs",
      "Responsive UI",
    ],
    stack: [
      "Spring Boot",
      "Angular",
      "MySQL",
      "Spring Security",
      "JWT",
      "Hibernate",
      "JPA",
    ],
    impact: [
      "Designed 15+ REST endpoints supporting multiple user roles.",
      "Implemented secure authentication and authorization using JWT and BCrypt.",
      "Built a scalable layered architecture for healthcare workflows.",
    ],
    role: "Full Stack Developer",
    github: "https://github.com/ManishKumarCs/Mediconnect",
    live: "https://healthcare-management-system-mediconnect.vercel.app/",
  },

  {
    id: "oms",
    name: "Onboarding Management System",
    tagline:
      "A centralized HR platform managing employees from joining to successful onboarding.",
    image:
      "/onboarding.png",
    problem:
      "Organizations manage onboarding across spreadsheets, emails, and disconnected tools, leading to delays, missed tasks, and poor communication.",
    solution:
      "Designed and developed a centralized onboarding platform with employee management, task assignment, mentor allocation, leave management, meeting scheduling, secure document handling, and internal communication.",
    features: [
      "Role-Based Authentication",
      "Employee Management",
      "Admin & Manager Dashboards",
      "Task Assignment",
      "Mentor Allocation",
      "Leave Management",
      "Meeting Scheduler",
      "Broadcast Messaging",
      "Notifications",
      "Secure Document Management",
    ],
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Multer",
      "Cloudinary",
      "Tailwind CSS",
    ],
    impact: [
      "Centralized HR onboarding workflows into a single platform.",
      "Improved collaboration between HR, managers, and employees.",
      "Built scalable REST APIs ready for future integrations.",
    ],
    role: "Full Stack Developer",
    github: "https://github.com/ManishKumarCs/Onboarding-Management-System",
    live: "https://omsportal.manishdev.xyz",
  },

  {
    id: "swiftkart",
    name: "SwiftKart",
    tagline:
      "A modern e-commerce platform with secure authentication and seamless shopping experience.",
    image:
      "/swiftkart.png",
    problem:
      "Online shoppers expect a fast and intuitive shopping experience while administrators need efficient product and order management.",
    solution:
      "Built a full-stack e-commerce platform with secure authentication, product catalog, shopping cart, checkout flow, and admin features for managing products and orders.",
    features: [
      "JWT Authentication",
      "Product Catalog",
      "Shopping Cart",
      "Checkout Flow",
      "Order Management",
      "Admin Dashboard",
      "REST APIs",
      "Responsive Design",
    ],
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Tailwind CSS",
    ],
    impact: [
      "Delivered an end-to-end shopping experience.",
      "Built secure APIs for order and product management.",
      "Optimized the UI for desktop and mobile devices.",
    ],
    role: "Full Stack Developer",
    github: "https://github.com/ManishKumarCs/E-Commerce-Project",
    live: "https://swiftkart.netlify.app",
  },

  {
    id: "medical-insurance",
    name: "Medical Insurance Cost Prediction",
    tagline:
      "An ML-powered application that predicts medical insurance premiums based on user information.",
    image:
      "/insurance.png",
    problem:
      "Estimating medical insurance premiums manually is difficult due to multiple influencing factors such as age, BMI, smoking habits, and region.",
    solution:
      "Developed a machine learning application using Python and Streamlit that predicts insurance costs in real time through an interactive web interface.",
    features: [
      "Machine Learning Model",
      "Real-Time Premium Prediction",
      "Interactive Streamlit UI",
      "Data Preprocessing",
      "Prediction Dashboard",
    ],
    stack: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Streamlit",
    ],
    impact: [
      "Provided instant insurance premium predictions.",
      "Demonstrated practical application of machine learning.",
      "Built an intuitive interface for non-technical users.",
    ],
    role: "Machine Learning Developer",
    github: "https://github.com/ManishKumarCs/medical-insurance-prediction",
    live: "https://medical-insurance-prediction-wvgfsrfxnhmkjca3gdvrn7.streamlit.app/",
  },

  {
    id: "github-explorer",
    name: "GitHub Explorer",
    tagline:
      "A developer tool to search and explore GitHub users, repositories, and profiles.",
    image:
      "/githubexplorer.png",
    problem:
      "Developers often need a faster way to explore GitHub users and repositories without navigating multiple GitHub pages.",
    solution:
      "Built a React application integrated with the GitHub REST API to search users, browse repositories, and view detailed profile information through a clean interface.",
    features: [
      "GitHub User Search",
      "Repository Explorer",
      "Profile Information",
      "Followers & Following",
      "REST API Integration",
      "Responsive Design",
    ],
    stack: [
      "React.js",
      "JavaScript",
      "GitHub REST API",
      "CSS",
    ],
    impact: [
      "Simplified GitHub profile and repository exploration.",
      "Enabled quick access to developer information.",
      "Improved developer productivity with an intuitive UI.",
    ],
    role: "Frontend Developer",
    github: "https://github.com/ManishKumarCs/GitHubExplorer",
    live: "https://githubbexplorer.netlify.app",
  },
];

export const dsaTopics = [
  { topic: "Arrays & Strings", level: 95 },
  { topic: "Binary Search", level: 90 },
  { topic: "Trees & BST", level: 85 },
  { topic: "Graphs", level: 80 },
  { topic: "Dynamic Programming", level: 78 },
  { topic: "Recursion & Backtracking", level: 88 },
  { topic: "Greedy Algorithms", level: 82 },
  { topic: "Linked Lists", level: 92 },
];

export const dsaStats = [
  { label: "Problems Solved", value: 300, suffix: "+" },
  { label: "Core Topics", value: 8, suffix: "" },
  { label: "Primary Language", value: 0, text: "Java" },
  { label: "Consistency", value: 0, text: "Daily" },
];

export const certifications = [
  {
    id: "coding-blocks-ml-ds",
    name: "Machine Learning & Data Science",
    issuer: "Coding Blocks",
    image: "/certifications/ml-data-science.jpg",
    skills: [
      "Machine Learning",
      "Data Science",
      "Python",
      "Scikit-learn",
      "Pandas",
      "Model Building",
    ],
    color: "cyan",
  },
  {
    id: "bluestock-sde",
    name: "Software Development Engineer Internship",
    issuer: "Bluestock Fintech",
    image: "/certifications/bluestock-sde.jpg",
    skills: [
      "Software Engineering",
      "Full Stack Development",
      "React.js",
      "Node.js",
      "REST APIs",
      "Git",
      "Agile Development",
    ],
    color: "violet",
  },
  {
    id: "devslane-fullstack",
    name: "Full Stack Web Development Internship",
    issuer: "Devslane Pvt. Ltd.",
    image: "/certifications/devslane-fullstack.jpg",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Role-Based Access Control",
      "REST APIs",
      "Git",
    ],
    color: "blue",
  },
];

export const achievements = [
  { title: "300+ DSA Problems", desc: "Solved across arrays, trees, graphs, DP & more.", icon: "Brain" },
  { title: "3 Production Apps", desc: "Full-stack projects across healthcare, HR & e-commerce.", icon: "Layers" },
  { title: "Frameworks From Scratch", desc: "Built UI & API automation frameworks end-to-end.", icon: "Wrench" },
  { title: "8.48 CGPA", desc: "B.Tech CSE, GLA University (2023–2026).", icon: "GraduationCap" },
  { title: "Agile Team Experience", desc: "Cross-team delivery with JIRA & Scrum.", icon: "Users" },
  { title: "SDE Internship", desc: "Completed Software Engineering internship.", icon: "Award" },
];

export const education = [
  { degree: "B.Tech — Computer Science & Engineering", school: "GLA University", period: "2023 — 2026", score: "CGPA: 8.48" },
  { degree: "Diploma — Computer Science (Honors)", school: "Vivekananda College of Polytechnic", period: "2020 — 2023", score: "83.3%" },
];

export const currentlyLearning = ["Docker", "Jenkins", "CI/CD", "Kubernetes", "System Design", "Microservices", "Cloud Deployment", "Advanced Spring Boot"];

export const techCloud = [
  "Java", "JavaScript", "SQL", "React", "Next.js", "Angular", "Node.js", "Express",
  "Spring Boot", "MongoDB", "MySQL", "Tailwind", "Selenium", "TestNG", "REST Assured",
  "Cucumber", "Postman", "Git", "GitHub", "Maven", "JIRA", "JWT",
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "problem-solving", label: "Problem Solving" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];
