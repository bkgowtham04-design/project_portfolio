export const portfolioData = {
  personal: {
    name: "Gowtham B",
    brandName: "GOWTHAM B",
    role: "Full Stack Developer (MERN)",
    headline: "Hi, I'm Gowtham B",
    supportingText:
      "I build responsive, database-driven web applications using React.js, Node.js, Express.js, and MongoDB, with a focus on clean UI, practical solutions, and user-focused experiences.",
    status: "Open to opportunities",
    location: "Chennai, Tamil Nadu, India",
    email: "bkgowtham04@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    resumeUrl: "/Gowtham_B_Resume.pdf",
  },

  stats: [
    { label: "Graduate", value: "BCA" },
    { label: "Completed Projects", value: "5" },
    { label: "MERN Training", value: "6 Months" },
    { label: "Core Specialization", value: "MERN" },
  ],

  about: {
    heading: "About Me",
    paragraphs: [
      "I'm Gowtham B, a BCA graduate and aspiring Full Stack Developer specializing in the MERN stack. I have hands-on experience building responsive, database-driven web applications using React.js, Node.js, Express.js, MongoDB, and MySQL.",
      "I enjoy turning ideas into functional applications and solving technical problems through practical, user-focused solutions. I'm a quick learner with a strong interest in modern web technologies and I'm looking forward to contributing to a growth-focused development team.",
    ],
  },

  whatIDo: [
    {
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces using React.js, HTML5, CSS3 and modern JavaScript.",
      icon: "layout",
    },
    {
      title: "Backend Development",
      description:
        "Developing REST APIs and server-side applications using Node.js and Express.js.",
      icon: "server",
    },
    {
      title: "Database Integration",
      description:
        "Working with MongoDB and MySQL to build database-driven applications.",
      icon: "database",
    },
    {
      title: "Full-Stack Development",
      description:
        "Connecting frontend, backend, APIs and databases to create complete web applications.",
      icon: "layers",
    },
  ],

  strengths: [
    "Problem Solving",
    "Quick Learning",
    "Clean Development",
    "Responsive Design",
    "Database-driven Applications",
    "User-focused Development",
  ],

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
      { name: "MongoDB", tag: "M" },
      { name: "Express.js", tag: "E" },
      { name: "React.js", tag: "R" },
      { name: "Node.js", tag: "N" },
    ],
  },

  projects: [
    {
      id: "cinestream",
      projectNumber: "Project 01",
      title: "CineStream",
      subtitle: "Short Film OTT Platform",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      categories: ["MERN", "React", "Full Stack"],
      featured: true,
      description:
        "A full-stack short-film OTT platform built using the MERN stack, allowing users to authenticate, browse short films, search content, explore genres, and watch uploaded videos.",
      features: [
        "User Authentication",
        "Movie Browsing",
        "Categories / Genres",
        "Search Functionality",
        "Movie Details Page",
        "Video Upload Flow",
        "Video Playback Streaming",
        "Director Content Upload",
        "REST APIs Integration",
        "Full CRUD Operations",
        "MongoDB Database",
      ],
      liveUrl: "https://example.com/cinestream-demo",
      githubUrl: "https://github.com/example/cinestream",
    },
    {
      id: "viva-management",
      projectNumber: "Project 02",
      title: "Digital Project Evaluation & Viva Management System",
      subtitle: "Full-Stack Academic Project",
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
      categories: [".NET", "React", "Full Stack"],
      featured: true,
      description:
        "A full-stack web application designed to digitize the final-year project evaluation and viva lifecycle, managing project submissions, mentorship, viva scheduling, marks, and result generation.",
      roles: ["Student", "Guide", "Viva Panel", "Admin"],
      features: [
        "Project Submission Lifecycle",
        "Mentorship Requests Workflow",
        "Marks Entry & Validation",
        "Viva Scheduling System",
        "Automated Result Generation",
        "Secure JWT Authentication",
        "Automated Grade Calculation",
        "Real-time Notification Triggers",
        "Excel Result Export with ClosedXML",
      ],
      liveUrl: "https://example.com/viva-system-demo",
      githubUrl: "https://github.com/example/viva-management",
    },
    {
      id: "trip-advising",
      projectNumber: "Project 03",
      title: "Trip Advising Website",
      subtitle: "Travel Recommendation Platform",
      tech: ["React.js", "Node.js", "MongoDB", "REST APIs"],
      categories: ["MERN", "React", "Full Stack"],
      featured: false,
      description:
        "A full-stack travel recommendation platform that helps users discover destinations, explore travel tips, and receive personalized trip suggestions.",
      features: [
        "Destination Search",
        "Curated Travel Tips",
        "Personalized Suggestions",
        "Responsive UI across devices",
        "REST APIs Connectivity",
        "Reusable React Components",
        "MongoDB Data Storage",
      ],
      liveUrl: "https://example.com/trip-advising",
      githubUrl: "https://github.com/example/trip-advising",
    },
    {
      id: "assignment-platform",
      projectNumber: "Project 04",
      title: "Assignment Submission Platform",
      subtitle: "Digital Assignment Management",
      tech: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "React Hooks"],
      categories: ["React", "Full Stack"],
      featured: false,
      description:
        "A responsive web platform that allows students to submit assignments digitally and track assignment details and submission status.",
      features: [
        "Assignment Submission Portal",
        "Detailed Assignment Briefs",
        "Real-time Submission Status",
        "Client-side Form Validation",
        "Dynamic UI Rendering",
        "React Hooks State Management",
        "ES6+ Event Handling",
        "Reusable Component Library",
      ],
      liveUrl: "https://example.com/assignment-platform",
      githubUrl: "https://github.com/example/assignment-platform",
    },
  ],

  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Dr. MGR University",
    period: "2023 - 2026",
    status: "Final Year",
    cgpa: "6.98",
    description:
      "Comprehensive computer science foundations covering web technologies, database management, software development life cycle, and application architecture.",
  },

  training: {
    title: "Full Stack Web Development — MERN Stack",
    institute: "SLA Institute, Chennai",
    duration: "6 Months",
    description:
      "Rigorous hands-on development training under senior mentors covering end-to-end full stack architecture, RESTful web services, and deployment pipelines.",
    curriculum: [
      {
        category: "Frontend",
        topics: ["HTML5", "CSS3", "JavaScript (ES6)", "React.js", "TypeScript"],
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
    { step: "01", title: "BCA Degree", desc: "Foundational computer science, logic, and database systems at Dr. MGR University." },
    { step: "02", title: "Web Fundamentals", desc: "HTML5, CSS3, modern JavaScript (ES6+), and responsive mobile-first layouts." },
    { step: "03", title: "React.js", desc: "Component hierarchy, Virtual DOM, React Hooks, and single-page application design." },
    { step: "04", title: "Node.js + Express", desc: "Server runtimes, middleware architecture, routing, and RESTful API endpoints." },
    { step: "05", title: "MongoDB + REST APIs", desc: "Schema design with Mongoose, database CRUD, indexing, and data modeling." },
    { step: "06", title: "MERN Stack Mastery", desc: "Full-stack integration, JWT authentication, state management, and CORS handling." },
    { step: "07", title: "Real-world Projects", desc: "Engineered CineStream OTT, Academic Evaluation System, and Travel platforms." },
    { step: "08", title: "Full Stack Developer", desc: "Ready to deliver high-quality, scalable code to a growth-focused engineering team." },
  ],
};
