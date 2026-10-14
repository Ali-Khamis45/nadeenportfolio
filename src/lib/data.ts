export const profile = {
  name: "Nadeen Hany",
  title: "AI Engineer | Machine Learning & Deep Learning | Full-Stack Developer",
  subtitle:
    "Computer Engineering student at E-JUST · AI Trainee @ Samsung Innovation Campus (SIC8)",
  email: "nadeenhany99@gmail.com",
  github: "https://github.com/Nadeeen232",
  linkedin: "https://www.linkedin.com/in/nadeen-hany-71a77221b/",
  location: "Alexandria, Egypt",
  cv: "/cv/nadeen-hany-cv.pdf",
  roles: [
    "AI Engineer",
    "Deep Learning Engineer",
    "Computer Vision Builder",
    "Data Analyst",
    "LLM Enthusiast",
    "Full-Stack Developer",
  ],
  about: [
    "I'm an AI engineer in the making, and a Computer Engineering student at the Egypt-Japan University of Science and Technology (E-JUST), with a 3.6/4.0 CGPA. My focus is deep learning and computer vision: training, evaluating and comparing neural networks on real-world data. My latest work is a medical-imaging pipeline that detects pneumonia in chest X-rays. It compares DenseNet121, EfficientNetB0 and a Swin Transformer, uses U-Net lung segmentation for preprocessing, and gets 90.4% test accuracy from the best model.",
    "I'm currently an AI Trainee in the Samsung Innovation Campus (SIC8) AI Track. I was one of 360 people selected from over 16,000 applicants, an acceptance rate of about 2.2%. There I work across the full data and ML lifecycle: Python, statistics, machine learning and deep learning. My SIC capstone flags at-risk students before exams on a 100,000-record dataset. It reaches 0.89 ROC-AUC and catches 82% of failing students. I also trained in data science at Orange Digital Center, hold Huawei's HCIA-AI certification, and compete in ICPC-style programming contests (ECPC).",
    "Before AI, I trained as a full-stack web engineer through DEPI and NTI, working with React, Angular, Node.js, Express and MongoDB. That background matters: I can take a model out of the notebook and ship it as a real, usable product.",
  ],
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
    id: "ai",
    title: "AI / Deep Learning",
    skills: [
      { name: "Python", level: 85 },
      { name: "Machine Learning", level: 80 },
      { name: "Deep Learning", level: 80 },
      { name: "TensorFlow / Keras", level: 78 },
      { name: "Transfer Learning", level: 82 },
      { name: "CNNs (DenseNet, EfficientNet)", level: 80 },
      { name: "Vision Transformers (Swin)", level: 68 },
      { name: "U-Net Segmentation", level: 70 },
      { name: "Ensemble Learning", level: 72 },
      { name: "Computer Vision", level: 78 },
      { name: "Model Evaluation & Metrics", level: 80 },
      { name: "Large Language Models (LLMs)", level: 72 },
      { name: "Prompt Engineering", level: 82 },
      { name: "Generative AI", level: 74 },
      { name: "PyTorch", level: 66 },
      { name: "Scikit-learn", level: 82 },
      { name: "XGBoost", level: 74 },
      { name: "Jupyter / Google Colab", level: 88 },
    ],
  },
  {
    id: "data",
    title: "Data Science",
    skills: [
      { name: "Data Analysis", level: 84 },
      { name: "Data Cleaning & Preprocessing", level: 84 },
      { name: "Exploratory Data Analysis (EDA)", level: 82 },
      { name: "Feature Importance & Correlation", level: 76 },
      { name: "Data Mining", level: 72 },
      { name: "Pandas", level: 82 },
      { name: "NumPy", level: 80 },
      { name: "Matplotlib / Seaborn", level: 80 },
      { name: "Power BI Dashboards", level: 80 },
      { name: "Data Augmentation", level: 76 },
      { name: "SQL", level: 72 },
      { name: "Feature Engineering", level: 78 },
      { name: "Hyperparameter Tuning", level: 74 },
      { name: "Cross-Validation", level: 76 },
      { name: "Imbalanced Classification Metrics", level: 76 },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "React.js", level: 88 },
      { name: "Angular", level: 82 },
      { name: "Next.js", level: 78 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "SASS / SCSS", level: 84 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Bootstrap", level: 82 },
      { name: "RxJS & Signals", level: 72 },
      { name: "Reactive Forms", level: 76 },
      { name: "Responsive Design", level: 92 },
      { name: "REST API Integration", level: 86 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js", level: 78 },
      { name: "Express.js", level: 78 },
      { name: "MongoDB", level: 76 },
      { name: "Mongoose", level: 74 },
      { name: "JWT Auth & bcrypt", level: 76 },
      { name: "RESTful APIs", level: 82 },
      { name: "Nodemailer", level: 68 },
    ],
  },
  {
    id: "cs",
    title: "CS & Programming",
    skills: [
      { name: "C++", level: 78 },
      { name: "Competitive Programming", level: 72 },
      { name: "Problem Solving", level: 82 },
      { name: "Data Structures & Algorithms", level: 76 },
      { name: "Object-Oriented Programming", level: 82 },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 80 },
      { name: "Vite", level: 80 },
      { name: "NPM", level: 86 },
      { name: "Postman", level: 82 },
      { name: "Docker (basics)", level: 58 },
      { name: "Vercel", level: 86 },
      { name: "GitHub Pages", level: 86 },
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
  githubUrl?: string;
  liveUrl?: string;
  /** External write-up link for projects without a public repo. */
  linkUrl?: string;
  linkLabel?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "chest-xray",
    title: "Chest X-Ray Pneumonia Detection with Deep Learning",
    tagline: "AI · Medical Imaging",
    goal: "Deep learning pipeline that classifies chest X-rays as NORMAL or PNEUMONIA. It compares three architectures on the same held-out test set and prepares their outputs for a soft-voting ensemble.",
    contributions: [
      "Fine-tuned transfer-learning classifiers on 624 held-out test images: EfficientNetB0 at 90.4% accuracy, DenseNet121 at 87.7%, and a lightweight Swin Transformer prototype at 78.7%",
      "Built a U-Net segmentation module that extracts the lung region as a preprocessing step before classification",
      "Ran every model on the same dataset, labels, test split and CSV format (filename, true label, predicted label, P(pneumonia)) so they can be fairly compared and ensembled",
      "Countered a tiny validation set with moderate data augmentation, a validation split carved from training data, and callback-driven training",
    ],
    image: "/images/projects/chest-xray.svg",
    tags: ["AI / ML", "Python", "TensorFlow / Keras", "DenseNet121", "EfficientNetB0", "Swin Transformer", "U-Net", "Computer Vision"],
    githubUrl: "https://github.com/Nadeeen232/Chest-XRay-ML-Project",
    featured: true,
  },
  {
    id: "student-at-risk",
    title: "At-Risk Student Prediction: Samsung Innovation Campus",
    tagline: "AI · Machine Learning · SIC Capstone",
    goal: "Machine learning model that flags students likely to fail before exam season, so schools can step in early. Built on 100,000 student records with academic, behavioural, lifestyle and wellbeing features.",
    contributions: [
      "Compared Logistic Regression, Decision Tree, Random Forest, Gradient Boosting, XGBoost and an RF + XGBoost soft-voting ensemble, using metrics suited to imbalanced data (77% pass / 23% fail)",
      "Chose tuned Logistic Regression for its 82.2% fail recall and 0.89 ROC-AUC. It catches 3,715 of 4,522 failing students",
      "Removed leakage columns such as exam score and grade, then used a stratified 80/20 split with median/mode imputation and one-hot encoding (62 features)",
      "Identified prior GPA and study habits as the strongest predictors, and turned them into recommendations for institutions",
    ],
    image: "/images/projects/student-at-risk.svg",
    tags: ["AI / ML", "Python", "Scikit-learn", "XGBoost", "Ensemble Learning"],
    githubUrl: "https://github.com/Nadeeen232/student-at-risk-prediction",
  },
  {
    id: "student-stress",
    title: "Student Stress Level Analysis",
    tagline: "Data Science · Team Project",
    goal: "Data analysis that combines physiological signals (heart rate, body temperature) with self-reported stress levels to find patterns that could help detect student stress early.",
    contributions: [
      "Cleaned the data: missing values, duplicates and data types",
      "Compared high- and low-stress groups and ran correlation analysis across heart rate, body temperature and stress level",
      "Built an interactive Power BI dashboard plus notebook charts (histograms, box plots, correlation heatmap)",
    ],
    image: "/images/projects/student-stress.svg",
    tags: ["Data Science", "Python", "Pandas", "Seaborn", "Power BI"],
    githubUrl: "https://github.com/Nadeeen232/Student-Stress-Level-Data-Analysis",
  },
  {
    id: "ai-learning-platform",
    title: "AI Learning Platform: Algorithm Visualizer",
    tagline: "EdTech · Team Project",
    goal: "Platform that makes learning algorithms visual and intuitive. It turns complex CS concepts into animations, hands-on simulations and real-time performance insights.",
    contributions: [
      "Animated step-by-step visualizations of how algorithms run behind the scenes",
      "Interactive simulations so students can experiment with inputs and watch the results",
    ],
    image: "/images/projects/ai-learning-platform.svg",
    tags: ["JavaScript", "HTML", "CSS", "Algorithms"],
    githubUrl: "https://github.com/Nadeeen232/ai-learning-platform",
  },
  {
    id: "novacart",
    title: "NovaCart: Full-Stack MEAN E-Commerce",
    tagline: "Full-Stack",
    goal: "End-to-end e-commerce platform with authentication, email confirmation, cart handling, an admin account and automated database seeding.",
    contributions: [
      "Built REST endpoints with Express and MongoDB/Mongoose, secured with JWT and bcrypt",
      "Developed a standalone Angular frontend using Signals, HttpClient and Reactive Forms",
      "Added Nodemailer email confirmation and seed scripts that generate realistic test data",
    ],
    image: "/images/projects/novacart.svg",
    tags: ["Angular", "Node.js", "Express", "MongoDB", "JWT Auth", "Nodemailer"],
    githubUrl: "https://github.com/Nadeeen232/NovaCart_EcommerceApplication",
  },
  {
    id: "angular-ecommerce",
    title: "Full-Stack Angular E-Commerce",
    tagline: "Full-Stack",
    goal: "Full-stack online store built with an Angular + TypeScript frontend and a JavaScript backend.",
    contributions: [
      "Component-based Angular storefront with routing and typed services",
      "API-driven product catalogue and cart flows",
    ],
    image: "/images/projects/angular-ecommerce.svg",
    tags: ["Angular", "TypeScript", "Node.js"],
    githubUrl: "https://github.com/Nadeeen232/Ecommerce_FullStack_Angular",
  },
  {
    id: "library-system",
    title: "Library Management System",
    tagline: "Python · OOP",
    goal: "Python library system with role-based access (admin, librarian, member), borrowing and returns, automatic fines, search, reports, and JSON persistence. It has both a CLI and a Tkinter GUI.",
    contributions: [
      "Built the CLI menu system that connects users to every feature",
      "Wrote the project documentation, including the OOP architecture and class diagrams",
      "Team project of 5 that applies inheritance, abstraction and composition",
    ],
    image: "/images/projects/library-system.svg",
    tags: ["Python", "OOP", "Tkinter", "JSON"],
    githubUrl: "https://github.com/Nadeeen232/Library-Management-System",
  },
  {
    id: "monac",
    title: "MONAC: Responsive Website",
    tagline: "Front-End",
    goal: "Responsive multi-section website built with HTML, CSS and JavaScript, deployed on GitHub Pages.",
    contributions: [
      "Hand-written responsive layouts and interactions",
      "Deployed and hosted on GitHub Pages",
    ],
    image: "/images/projects/monac.svg",
    tags: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/Nadeeen232/MONAC.",
    liveUrl: "https://nadeeen232.github.io/MONAC./",
  },
];

export const projectTags = [
  "All",
  "AI / ML",
  "Data Science",
  "Python",
  "Angular",
  "React",
  "Node.js",
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
    id: "sic",
    role: "AI Trainee: AI Track (SIC8)",
    org: "Samsung Innovation Campus · Samsung Electronics Egypt × Life Makers Foundation",
    period: "Jul 2026 — Present",
    description:
      "One of 360 trainees selected from 16,000+ applicants (about 2.2% acceptance). Covers Python, statistics, machine learning and deep learning. Capstone: an at-risk student prediction model on 100,000 records that reaches 0.89 ROC-AUC and 82% fail recall.",
    tags: ["Python", "Machine Learning", "Deep Learning", "Scikit-learn", "XGBoost"],
  },
  {
    id: "odc",
    role: "Data Science Trainee",
    org: "Orange Digital Center (D-Hub)",
    period: "2026",
    description:
      "Cleaned, explored and visualised datasets with Python, Pandas, NumPy and Matplotlib. Trained classification and prediction models with Scikit-learn and reported the results through dashboards.",
    tags: ["Python", "Pandas", "Scikit-learn", "Dashboards"],
  },
  {
    id: "ecpc",
    role: "Competitive Programmer: ECPC",
    org: "Egyptian Collegiate Programming Contest (ICPC)",
    period: "Aug 2026",
    description:
      "Competed in ECPC for the first time as part of a two-person team, solving algorithmic problems under contest pressure. Placed 41st on contest day 4.",
    tags: ["C++", "Algorithms", "Problem Solving"],
  },
  {
    id: "nti",
    role: "MEAN-Stack Web Development Trainee",
    org: "National Telecommunication Institute (NTI): Summer Training",
    period: "Jul 2026 — Aug 2026",
    description:
      "Intensive MEAN-stack training covering MongoDB, Express, Angular and Node.js. Built NovaCart, a full-stack e-commerce app with JWT auth, email confirmation and seeded data.",
    tags: ["Angular", "Node.js", "Express", "MongoDB"],
  },
  {
    id: "depi",
    role: "React Front-End Web Developer (Internship)",
    org: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "Jun 2025 — Jan 2026",
    description:
      "Built and styled modern interfaces with HTML, CSS, JavaScript, TypeScript, Tailwind and SASS, with a focus on React. Worked on the server side with Node.js and Express and used Git/GitHub for collaboration. Also covered Docker and Kubernetes basics, unit testing, documentation and prompt engineering principles.",
    tags: ["React", "TypeScript", "Node.js", "Prompt Engineering"],
  },
  {
    id: "hcia",
    role: "HCIA-AI Certification",
    org: "Huawei",
    period: "Aug 2024",
    description:
      "Completed Huawei's HCIA-AI learning path covering AI fundamentals, machine learning, deep learning and the AI development framework. This is where the AI journey began.",
    tags: ["Artificial Intelligence", "Machine Learning", "Deep Learning"],
  },
  {
    id: "ejust",
    role: "Computer Engineering Student",
    org: "Egypt-Japan University of Science and Technology (E-JUST)",
    period: "Expected 2028",
    description:
      "B.Sc. in Computer Engineering, expected 2028, CGPA 3.6/4.0. Relevant coursework: Machine Learning, Deep Learning, Computer Vision, NLP, LLMs, and Data Structures & Algorithms.",
    tags: ["Computer Engineering", "AI", "Algorithms"],
  },
];

export const certifications = [
  { year: "2024", title: "Huawei HCIA-AI", org: "Huawei" },
  { year: "2025", title: "React Front-End Developer", org: "DEPI" },
  { year: "2025", title: "Core Programming Bootcamp", org: "GDG On Campus" },
  { year: "2026", title: "Python Programming Basics", org: "MaharaTech · ITI" },
  { year: "2026", title: "MEAN-Stack Web Development", org: "NTI" },
  { year: "2026", title: "Data Science Training", org: "Orange Digital Center" },
  { year: "2026", title: "ECPC Contestant", org: "ICPC" },
  { year: "2026", title: "AI Track (SIC8)", org: "Samsung Innovation Campus" },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    id: "ml-dl",
    title: "Machine Learning & Deep Learning Models",
    description:
      "End-to-end model development: data preparation, transfer learning with modern CNNs and Transformers, training with callbacks, and clear evaluation on held-out data.",
    icon: "Brain",
  },
  {
    id: "computer-vision",
    title: "Computer Vision & Medical Imaging",
    description:
      "Image classification and U-Net segmentation pipelines, plus multi-model comparisons ready for ensembling, like the 90%-accuracy chest X-ray pneumonia detector.",
    icon: "ScanEye",
  },
  {
    id: "data-analytics",
    title: "Data Analysis & BI Dashboards",
    description:
      "Turning messy data into decisions: cleaning, EDA, correlation and feature-importance analysis, predictive models with Scikit-learn and XGBoost, and interactive Power BI dashboards.",
    icon: "BarChart3",
  },
  {
    id: "llm-integration",
    title: "LLM & AI Feature Integration",
    description:
      "Prompt engineering and LLM-powered features built into real web products, connecting AI models to clean, usable interfaces.",
    icon: "Bot",
  },
  {
    id: "fullstack",
    title: "Full-Stack Web Applications",
    description:
      "MEAN/MERN apps with REST APIs, MongoDB, and JWT authentication, so AI models can ship as complete products.",
    icon: "Layers",
  },
  {
    id: "frontend",
    title: "Front-End & Responsive UI",
    description:
      "Pixel-careful React and Angular interfaces, turning designs into fast, responsive and accessible components.",
    icon: "PenTool",
  },
];

export const techStack = [
  "Python",
  "TensorFlow",
  "Keras",
  "PyTorch",
  "Scikit-Learn",
  "XGBoost",
  "Pandas",
  "NumPy",
  "Power BI",
  "Jupyter",
  "React",
  "Angular",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Git",
  "C++",
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
