export const portfolioData = {
  personal: {
    name: "Alex Johnson",
    title: "Full Stack Developer",
    subtitle: "Building exceptional digital experiences",
    bio: "Passionate full stack developer with 5+ years of experience creating scalable web applications. I specialize in React, Node.js, and modern web technologies. When I'm not coding, you'll find me exploring new technologies, contributing to open source, or enjoying outdoor photography.",
    location: "San Francisco, CA",
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
    resumeUrl: "/resume.pdf"
  },

  social: {
    github: "https://github.com/alexjohnson",
    linkedin: "https://linkedin.com/in/alexjohnson",
    twitter: "https://twitter.com/alexjohnson",
    website: "https://alexjohnson.dev"
  },

  skills: {
    technical: [
      { name: "JavaScript", level: 95, category: "Language" },
      { name: "TypeScript", level: 90, category: "Language" },
      { name: "Python", level: 85, category: "Language" },
      { name: "React", level: 95, category: "Frontend" },
      { name: "Next.js", level: 90, category: "Frontend" },
      { name: "Vue.js", level: 80, category: "Frontend" },
      { name: "Node.js", level: 90, category: "Backend" },
      { name: "Express", level: 85, category: "Backend" },
      { name: "PostgreSQL", level: 85, category: "Database" },
      { name: "MongoDB", level: 80, category: "Database" },
      { name: "AWS", level: 80, category: "Cloud" },
      { name: "Docker", level: 75, category: "DevOps" }
    ],
    soft: [
      "Problem Solving",
      "Team Leadership",
      "Communication",
      "Project Management",
      "Creative Thinking",
      "Mentoring"
    ]
  },

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with advanced features including inventory management, payment processing, and analytics dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      githubUrl: "https://github.com/alexjohnson/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.vercel.app",
      image: "/project1.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, file sharing, and team analytics.",
      technologies: ["Next.js", "Prisma", "WebSocket", "Tailwind"],
      githubUrl: "https://github.com/alexjohnson/task-manager",
      liveUrl: "https://taskmaster-app.vercel.app",
      image: "/project2.jpg",
      featured: true
    },
    {
      id: 3,
      title: "AI Chat Assistant",
      description: "Intelligent chat assistant powered by OpenAI API with custom knowledge base and conversation memory.",
      technologies: ["React", "OpenAI API", "Vector DB", "FastAPI"],
      githubUrl: "https://github.com/alexjohnson/ai-assistant",
      liveUrl: "https://ai-chat-demo.vercel.app",
      image: "/project3.jpg",
      featured: false
    }
  ],

  experience: [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      description: [
        "Led development of microservices architecture serving 100k+ daily users",
        "Mentored junior developers and established coding best practices",
        "Improved application performance by 40% through optimization strategies",
        "Collaborated with product team to deliver features ahead of schedule"
      ],
      technologies: ["React", "Node.js", "AWS", "PostgreSQL"]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "San Francisco, CA",
      duration: "2020 - 2022",
      description: [
        "Built and deployed 15+ web applications from concept to production",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Designed RESTful APIs used by mobile and web applications",
        "Contributed to product decisions and technical architecture planning"
      ],
      technologies: ["Vue.js", "Express", "MongoDB", "Docker"]
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "Los Angeles, CA",
      duration: "2019 - 2020",
      description: [
        "Developed responsive websites for Fortune 500 clients",
        "Improved website loading speeds by 50% through optimization",
        "Collaborated with designers to create pixel-perfect interfaces",
        "Maintained and updated legacy codebases"
      ],
      technologies: ["JavaScript", "CSS", "WordPress", "PHP"]
    }
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      location: "Berkeley, CA",
      duration: "2015 - 2019",
      gpa: "3.8/4.0",
      achievements: [
        "Magna Cum Laude",
        "Dean's List (6 semesters)",
        "Computer Science Honor Society"
      ]
    },
    {
      id: 2,
      degree: "Full Stack Web Development Bootcamp",
      school: "General Assembly",
      location: "San Francisco, CA",
      duration: "2018",
      gpa: null,
      achievements: [
        "Top 5% of cohort",
        "Best Final Project Award"
      ]
    }
  ]
};