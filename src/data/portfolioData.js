export const portfolioData = {
  personal: {
    name: "Gowtham B",
    brandName: "GOWTHAM B",
    role: "Full Stack Developer (MERN) / Frontend Specialist",
    headline: "Crafting Weightless Web Applications & Intuitive MERN Experiences",
    supportingText:
      "I build responsive, database-driven web applications using React.js, Node.js, Express.js, and MongoDB, with a focus on clean UI, practical solutions, and user-focused experiences.",
    status: "Available for Full Stack & Frontend Roles",
    location: "Chennai, Tamil Nadu, India",
    phone: "+91 8072907441",
    github: "https://github.com/bkgowtham04-design",
    linkedin: "https://www.linkedin.com/in/gowtham-b-749906376/",
    portfolioUrl: "https://project-portfolio-phi-seven.vercel.app/",
    resumeUrl: "/Gowtham_B_Resume.pdf",
  },

  stats: [
    { label: "BCA Graduate", value: "Dr. MGR Univ" },
    { label: "Projects Completed", value: "5" },
    { label: "MERN Training", value: "6 Months" },
    { label: "Core Specialization", value: "MERN Stack" },
  ],

  about: {
    heading: "About Me",
    subheading: "Where solid computer application foundations meet modern web engineering.",
    narrative: [
      "I'm Gowtham B, a BCA graduate from Dr. MGR University and an aspiring Full Stack Developer specializing in the MERN stack. I have hands-on experience building responsive, database-driven web applications using React.js, Node.js, Express.js, MongoDB, and MySQL.",
      "I enjoy turning ideas into functional applications and solving technical problems through practical, user-focused solutions. I'm a quick learner with a strong interest in modern web technologies, fluid responsive interfaces, and weightless anti-gravity interactions, looking forward to contributing to a growth-focused development team.",
    ],
    pillars: [
      {
        title: "Academic Foundation",
        desc: "BCA graduate from Dr. MGR University (CGPA: 6.98) with solid grounding in computer applications, databases, and software lifecycle.",
        badge: "Dr. MGR Univ (6.98 CGPA)",
      },
      {
        title: "MERN Stack Mastery",
        desc: "6 Months intensive Full Stack training at SLA Institute Chennai covering React.js, Node.js, Express.js, MongoDB, and RESTful APIs.",
        badge: "SLA Institute Certified",
      },
      {
        title: "Anti-Gravity UI/UX",
        desc: "Engineering weightless floating animations, soft shadows, intuitive micro-interactions, and 60fps responsive interfaces.",
        badge: "Modern Frontend",
      },
      {
        title: "Database-Driven Apps",
        desc: "Designing robust NoSQL & SQL data models, automated result generation, and secure JWT-authenticated full-stack systems.",
        badge: "Production Ready",
      },
    ],
  },

  skills: {
    languages: [
      { name: "JavaScript (ES6)", tag: "Core" },
      { name: "Python (Basics)", tag: "Scripting" },
    ],
    frontend: [
      { name: "React.js", tag: "Framework" },
      { name: "HTML5", tag: "Markup" },
      { name: "CSS3", tag: "Styling" },
      { name: "Responsive Web Design", tag: "UI/UX" },
    ],
    backend: [
      { name: "Node.js", tag: "Runtime" },
      { name: "Express.js", tag: "Framework" },
      { name: "REST APIs", tag: "Architecture" },
    ],
    database: [
      { name: "MongoDB", tag: "NoSQL" },
      { name: "MySQL", tag: "Relational" },
    ],
    tools: [
      { name: "Git", tag: "VCS" },
      { name: "GitHub", tag: "Collaboration" },
      { name: "MS Excel", tag: "Analysis" },
    ],
    fullstack: [
      { name: "MongoDB", tag: "Database" },
      { name: "Express.js", tag: "Backend" },
      { name: "React.js", tag: "Frontend" },
      { name: "Node.js", tag: "Server" },
    ],
  },

  projects: [
    {
      id: "cinestream",
      projectNumber: "Project 01",
      title: "CineStream",
      subtitle: "Short Film OTT Platform",
      category: "MERN",
      categories: ["MERN", "React", "Full Stack"],
      featured: true,
      description:
        "A full-stack short-film OTT platform built using the MERN stack, allowing users to authenticate, browse short films, search content, explore genres, and watch uploaded videos with fluid video playback.",
      highlights: [
        "Secure User Authentication & Session Management",
        "Dynamic Movie Browsing & Category Filtering",
        "Fast Search Engine & Detailed Film Pages",
        "Video Upload & Director Content Dashboard",
        "Smooth Video Playback Streaming Engine",
        "REST APIs & Full MongoDB CRUD Operations",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://project-short-film.vercel.app/",
      githubUrl: "https://github.com/example/cinestream",
    },
    {
      id: "viva-management",
      projectNumber: "Project 02",
      title: "Digital Project Evaluation & Viva Management System",
      subtitle: "Full-Stack Academic Management Platform",
      category: ".NET & React",
      categories: [".NET", "React", "Full Stack"],
      featured: true,
      description:
        "A full-stack web application designed to digitize the final-year project evaluation and viva lifecycle, managing project submissions, mentorship, viva scheduling, marks, and result generation.",
      roles: ["Student", "Guide", "Viva Panel", "Admin"],
      highlights: [
        "End-to-End Project Submission & Mentorship Requests",
        "Viva Scheduling System & Real-Time Notifications",
        "Marks Entry & Automated Grade Calculations",
        "Role-Based JWT Authentication (Student, Guide, Panel, Admin)",
        "Automated Excel Result Export using ClosedXML",
      ],
      tech: [
        ".NET 8",
        "ASP.NET Core",
        "React",
        "TypeScript",
        "SQLite",
        "EF Core",
        "JWT",
        "ClosedXML",
      ],
      liveUrl: "https://example.com/viva-system-demo",
      githubUrl: "https://github.com/example/viva-management",
    },
    {
      id: "trip-advising",
      projectNumber: "Project 03",
      title: "Trip Advising Website",
      subtitle: "Travel Recommendation Platform",
      category: "MERN",
      categories: ["MERN", "React", "Full Stack"],
      featured: false,
      description:
        "A full-stack travel recommendation platform that helps users discover destinations, explore travel tips, and receive personalized trip suggestions with an intuitive, weightless user interface.",
      highlights: [
        "Destination Search & Location Filtering",
        "Curated Travel Tips & Recommendations",
        "Personalized Trip Suggestions",
        "Responsive Device-Agnostic UI",
        "REST APIs & MongoDB Integration",
      ],
      tech: ["React.js", "Node.js", "MongoDB", "REST APIs", "Tailwind CSS"],
      liveUrl: "https://trippilot-peach.vercel.app/",
      githubUrl: "https://github.com/example/trip-advising",
    },
    {
      id: "assignment-platform",
      projectNumber: "Project 04",
      title: "Assignment Submission Platform",
      subtitle: "Digital Assignment Management",
      category: "React App",
      categories: ["React", "Full Stack"],
      featured: false,
      description:
        "A responsive web platform that allows students to submit assignments digitally, view submission status, and track feedback through dynamic rendering and form validation.",
      highlights: [
        "Digital Assignment Submission Portal",
        "Live Submission Status Tracking",
        "Client-Side Form Validation & Dynamic Rendering",
        "Reusable Component Architecture with React Hooks",
      ],
      tech: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "React Hooks"],
      liveUrl: "https://assignment-main-pearl.vercel.app/",
      githubUrl: "https://github.com/example/assignment-platform",
    },
  ],

  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Dr. MGR University",
    period: "2023 - 2026",
    status: "Final Year Graduate",
    cgpa: "6.98",
    description:
      "Graduating in Computer Applications with a 6.98 CGPA. Core focus on web application development, database management systems, data structures, and software engineering methodologies.",
  },

  training: {
    title: "Full Stack Web Development — MERN Stack",
    institute: "SLA Institute, Chennai",
    duration: "6 Months",
    description:
      "Intensive 6-month hands-on full-stack training under industry mentors. Built end-to-end applications, connected frontend and backend microservices, and deployed production web applications.",
    curriculum: [
      {
        category: "Frontend",
        topics: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "TypeScript"],
      },
      {
        category: "Backend",
        topics: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
      },
      {
        category: "Additional",
        topics: [
          "JWT Authentication",
          "Database Integration (NoSQL & SQL)",
          "Vercel / Render Deployment",
        ],
      },
    ],
  },

  journey: [
    { step: "01", title: "BCA Degree", desc: "Computer applications foundation, algorithms, and databases at Dr. MGR University." },
    { step: "02", title: "Web Fundamentals", desc: "Mastering HTML5, CSS3, modern JavaScript (ES6+), and responsive layouts." },
    { step: "03", title: "React.js", desc: "Component architecture, Virtual DOM, Hooks, and single-page application state." },
    { step: "04", title: "Node.js + Express", desc: "Building asynchronous backend services, routing, and RESTful APIs." },
    { step: "05", title: "MongoDB + REST APIs", desc: "Schema design with Mongoose, database CRUD operations, and data modeling." },
    { step: "06", title: "MERN Stack Mastery", desc: "6-month intensive training at SLA Institute Chennai connecting frontend & backend." },
    { step: "07", title: "Real-world Projects", desc: "Architecting CineStream OTT, Digital Viva Evaluation, and Trip Advising platforms." },
    { step: "08", title: "Full Stack Developer", desc: "Ready to deliver high-quality, scalable code to a growth-focused engineering team." },
  ],
};
