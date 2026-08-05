export const profile = {
  name: "Nadeen Hany",
  title: "Frontend & Full-Stack Web Developer | React.js & Angular Developer | UI/UX Specialist",
  subtitle:
    "Computer Engineering Student at Egypt-Japan University of Science and Technology (E-JUST) · AI Trainee @ SIC",
  email: "nadeenhany99@gmail.com",
  github: "https://github.com/Nadeeen232",
  linkedin: "https://www.linkedin.com/in/nadeen-hany-71a77221b/",
  location: "Egypt",
  roles: [
    "React Developer",
    "Angular Developer",
    "UI/UX Designer",
    "Frontend Engineer",
    "AI Enthusiast",
    "MEAN Stack Developer",
  ],
  about:
    "Passionate and detail-oriented web developer with expertise in modern frontend engineering (React, Angular, Next.js) and full-stack environments (MEAN stack). I have a proven track record in bridging design and engineering — converting complex requirements into clean, scalable, and responsive web applications. I'm dedicated to optimizing performance, writing maintainable code, and crafting exceptional digital experiences. Computer Engineering student at E-JUST, with a strong interest in Human-Centered Design, Front-End Architecture, and Artificial Intelligence.",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export type SkillCategory = {
  id: string;
  title: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Angular", level: 85 },
      { name: "Next.js", level: 88 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "TypeScript", level: 84 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "SCSS", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 80 },
      { name: "SASS", level: 78 },
      { name: "Redux Toolkit", level: 75 },
      { name: "Zustand", level: 78 },
      { name: "RxJS", level: 76 },
      { name: "Signals", level: 74 },
      { name: "Reactive Forms", level: 78 },
      { name: "Angular CDK", level: 72 },
      { name: "React Query", level: 74 },
      { name: "Framer Motion", level: 80 },
      { name: "GSAP", level: 70 },
      { name: "Three.js", level: 62 },
      { name: "React Three Fiber", level: 60 },
      { name: "Responsive Design", level: 93 },
      { name: "REST API", level: 88 },
      { name: "Axios", level: 84 },
      { name: "React Hook Form", level: 80 },
      { name: "Zod", level: 76 },
      { name: "Shadcn UI", level: 78 },
      { name: "Material UI", level: 72 },
    ],
  },
  {
    id: "uiux",
    title: "UI/UX",
    skills: [
      { name: "Figma", level: 88 },
      { name: "Figma-to-Code", level: 86 },
      { name: "Adobe XD", level: 70 },
      { name: "Wireframing", level: 85 },
      { name: "Prototyping", level: 82 },
      { name: "Design Systems", level: 80 },
      { name: "User Research", level: 68 },
      { name: "Accessibility", level: 75 },
      { name: "Interaction Design", level: 80 },
      { name: "Animation Design", level: 78 },
    ],
  },
  {
    id: "backend",
    title: "Backend/Auth",
    skills: [
      { name: "Node.js", level: 78 },
      { name: "Express.js", level: 76 },
      { name: "MongoDB", level: 74 },
      { name: "Mongoose", level: 72 },
      { name: "JWT Auth", level: 76 },
      { name: "bcrypt", level: 74 },
      { name: "RESTful APIs", level: 82 },
      { name: "Nodemailer", level: 68 },
      { name: "NextAuth.js", level: 74 },
      { name: "OAuth", level: 70 },
      { name: "Stripe", level: 64 },
    ],
  },
  {
    id: "data-maps",
    title: "Data/Maps",
    skills: [
      { name: "Recharts", level: 78 },
      { name: "Leaflet Maps API", level: 70 },
    ],
  },
  {
    id: "tools",
    title: "Developer Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Vite", level: 82 },
      { name: "Webpack", level: 65 },
      { name: "NPM", level: 88 },
      { name: "Yarn", level: 78 },
      { name: "ESLint", level: 82 },
      { name: "Prettier", level: 85 },
      { name: "Docker", level: 58 },
      { name: "Postman", level: 84 },
      { name: "Firebase", level: 76 },
      { name: "Supabase", level: 68 },
    ],
  },
  {
    id: "ai",
    title: "AI",
    skills: [
      { name: "Python", level: 78 },
      { name: "Machine Learning", level: 65 },
      { name: "Prompt Engineering", level: 82 },
      { name: "Generative AI", level: 78 },
      { name: "OpenAI API", level: 76 },
      { name: "LangChain", level: 60 },
      { name: "HuggingFace", level: 58 },
      { name: "TensorFlow", level: 55 },
      { name: "Scikit-Learn", level: 60 },
      { name: "Pandas", level: 68 },
      { name: "NumPy", level: 66 },
      { name: "Computer Vision Basics", level: 52 },
      { name: "NLP Basics", level: 56 },
      { name: "Vector Databases", level: 50 },
      { name: "Embeddings", level: 54 },
      { name: "LLMs", level: 70 },
    ],
  },
  {
    id: "deployment",
    title: "Deployment",
    skills: [
      { name: "Vercel", level: 90 },
      { name: "Netlify", level: 82 },
      { name: "Render", level: 74 },
      { name: "Railway", level: 68 },
      { name: "GitHub Actions", level: 60 },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  tagline: string;
  goal: string;
  contributions: string[];
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "novacart",
    title: "NovaCart — Full-Stack MEAN E-Commerce Application",
    tagline: "Latest Project",
    goal: "End-to-end e-commerce platform with authentication, email confirmation, real-time cart handling, and automated database seeding.",
    contributions: [
      "Built REST endpoints with Express and MongoDB, secured with JWT + bcrypt authentication",
      "Developed a modular standalone Angular frontend using Signals, RxJS, and Reactive Forms",
      "Wrote seed scripts to spin up realistic local test data on demand",
    ],
    image: "/images/projects/novacart.svg",
    tags: ["Angular", "Node.js", "Express", "MongoDB", "JWT Auth", "Reactive Forms", "Nodemailer"],
    githubUrl: "https://github.com/Nadeeen232/NovaCart_EcommerceApplication",
    featured: true,
  },
  {
    id: "saas-dashboard",
    title: "SaaS Business Analytics & Performance Dashboard",
    tagline: "Analytics Panel",
    goal: "Interactive analytics panel for B2B platforms, aggregating revenue metrics, subscription stats, and user growth.",
    contributions: [
      "Built dynamic tables with instant multi-column filtering and pagination",
      "Visualized revenue and growth trends with Recharts",
      "Implemented dynamic dark/light theming powered by Zustand global state",
    ],
    image: "/images/projects/saas-dashboard.svg",
    tags: ["React.js", "Recharts", "Tailwind CSS", "Zustand", "REST API"],
    githubUrl: "https://github.com/Nadeeen232",
  },
  {
    id: "ai-prompt-hub",
    title: "AI Image Prompt Generator & Community Hub",
    tagline: "AI Community App",
    goal: "SEO-optimized app for discovering, generating, and sharing creative AI image prompts.",
    contributions: [
      "Implemented SSR via the Next.js App Router for fast, SEO-friendly pages",
      "Wired up OAuth authentication with NextAuth.js",
      "Built a fluid masonry grid layout with Tailwind CSS",
    ],
    image: "/images/projects/ai-prompt-hub.svg",
    tags: ["Next.js 14", "React", "Tailwind CSS", "NextAuth", "MongoDB"],
    githubUrl: "https://github.com/Nadeeen232",
  },
  {
    id: "real-estate",
    title: "Interactive Real Estate Property Discovery Platform",
    tagline: "Map-Based Search",
    goal: "Dynamic property search tool with integrated interactive maps and real-time filtering.",
    contributions: [
      "Synced Leaflet Maps API to viewport bounds without full page reloads",
      "Built real-time filtering across price, location, and property type",
      "Used Firebase for property data and image storage",
    ],
    image: "/images/projects/real-estate.svg",
    tags: ["React.js", "React Router", "Leaflet Maps API", "Firebase"],
    githubUrl: "https://github.com/Nadeeen232",
  },
  {
    id: "kanban",
    title: "Agile Kanban Drag-and-Drop Task Manager",
    tagline: "Productivity Tool",
    goal: "Productivity tool for managing team project boards and task workflows.",
    contributions: [
      "Implemented accessible drag-and-drop column transfers with Angular CDK",
      "Managed complex, efficient DOM updates with RxJS state streams",
      "Styled a fully responsive board layout with SCSS",
    ],
    image: "/images/projects/kanban.svg",
    tags: ["Angular", "RxJS", "Angular CDK", "SCSS"],
    githubUrl: "https://github.com/Nadeeen232",
  },
];

export const projectTags = [
  "All",
  "React.js",
  "Angular",
  "Next.js 14",
  "Node.js",
  "MongoDB",
  "Firebase",
] as const;

export type ExperienceItem = {
  id: string;
  role: string;
  org: string;
  period: string;
  description: string;
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "ejust",
    role: "Computer Engineering Student",
    org: "Egypt-Japan University of Science and Technology (E-JUST)",
    period: "2022 — Present",
    description:
      "Studying computer engineering with a focus on software systems, algorithms, and human-centered design, while building web projects alongside coursework.",
    tags: ["Computer Engineering", "Algorithms", "HCI"],
  },
  {
    id: "freelance",
    role: "Freelance Frontend & Full-Stack Developer",
    org: "Independent",
    period: "2023 — Present",
    description:
      "Architect and deliver high-performance SPAs for international clients across e-commerce and SaaS. Translate Figma designs into pixel-perfect React/Angular components, and integrate REST APIs, Stripe payments, and OAuth/JWT authentication.",
    tags: ["React", "Angular", "Stripe", "OAuth/JWT"],
  },
  {
    id: "sic",
    role: "AI Trainee",
    org: "Samsung Innovation Campus (SIC)",
    period: "2025 — Present",
    description:
      "Training in applied AI and machine learning fundamentals — from data preprocessing to model building — as part of Samsung's innovation and enablement program.",
    tags: ["Python", "Machine Learning", "Data Analysis"],
  },
  {
    id: "nti",
    role: "Frontend Web Development Specialist Trainee",
    org: "National Telecommunication Institute (NTI)",
    period: "2026",
    description:
      "Rigorous training in modern web engineering covering React/Angular state management and full-stack workflows, with capstone projects emphasizing component modularity, performance optimization, and API integration.",
    tags: ["React", "Angular", "State Management", "API Integration"],
  },
  {
    id: "projects",
    role: "Personal Projects, Hackathons & Learning Journey",
    org: "Self-Directed",
    period: "Ongoing",
    description:
      "Designing and shipping full-stack and front-end projects to explore React/Angular ecosystems, 3D web experiences, and AI-integrated interfaces — while competing in student and regional hackathons.",
    tags: ["React", "Angular", "Hackathons", "Generative AI"],
  },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    id: "design-to-code",
    title: "Figma / Design to Responsive Code",
    description:
      "Pixel-perfect conversion of UI designs into clean, modular React, Next.js, or Angular components.",
    icon: "PenTool",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    description:
      "Custom storefronts, dynamic shopping carts, checkout logic, and admin control panels.",
    icon: "ShoppingCart",
  },
  {
    id: "fullstack",
    title: "Full-Stack Web Development",
    description: "End-to-end apps built with MEAN/MERN stack architecture.",
    icon: "Layers",
  },
  {
    id: "api-auth",
    title: "API Development & Auth Integration",
    description:
      "Secure REST API engineering, database schema design, and JWT/OAuth authentication.",
    icon: "ShieldCheck",
  },
];

export const techStack = [
  "React",
  "Angular",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "Git",
  "Figma",
  "Python",
  "TensorFlow",
  "OpenAI",
  "Docker",
  "Vercel",
  "Firebase",
];

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  placeholder: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Youssef Ibrahim",
    role: "Team Lead, Hackathon Project",
    quote:
      "Nadeen turned our rough idea into a polished interface overnight. Her eye for detail and speed with React are rare to find together.",
    avatar: "/images/testimonials/avatar-1.svg",
    placeholder: true,
  },
  {
    id: "t2",
    name: "Mariam El-Sayed",
    role: "Peer, E-JUST Computer Engineering",
    quote:
      "Working with Nadeen on coursework projects, I was consistently impressed by how she balances clean code with genuinely thoughtful UX.",
    avatar: "/images/testimonials/avatar-2.svg",
    placeholder: true,
  },
  {
    id: "t3",
    name: "Omar Farouk",
    role: "Mentor, SIC AI Track",
    quote:
      "She approaches AI problems with the same design sensibility she brings to interfaces — structured, curious, and always iterating.",
    avatar: "/images/testimonials/avatar-3.svg",
    placeholder: true,
  },
];

export const socials = [
  { label: "GitHub", href: profile.github, icon: "Github" },
  { label: "LinkedIn", href: profile.linkedin, icon: "Linkedin" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "Mail" },
];
