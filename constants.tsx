import { Project, Experience, SkillCategory } from './types';

const COMMON_GITHUB_LINK = "https://github.com/Sharan171111?tab=repositories";

export const PROJECTS: Project[] = [
  {
    title: "Video Sensitivity Analyzer",
    problem: "Manual moderation of video content is slow and error-prone.",
    approach: "Integrated Google Gemini AI to analyze video content sensitivity with real-time progress tracking via web sockets.",
    toolsSummary: "JavaScript, Gemini AI, Full-stack, Video Streaming",
    impact: "Provides seamless video streaming with real-time progress tracking and AI content sensitivity analysis.",
    tags: ["JavaScript", "AI", "Video", "Full-Stack Dev"],
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Sharan171111/video-sensitivity_analyzer"
  },
  {
    title: "Data Warehouse Architecture",
    problem: "Siloed data systems prevented unified, high-quality business analytics and reporting.",
    approach: "Built a multi-layered (Bronze, Silver, Gold) Medallion Architecture with complete ETL pipelines using Stored Procedures.",
    toolsSummary: "SQL Server, TSQL, Medallion Architecture, ETL",
    impact: "Delivered a scalable analytics data source featuring data quality checks and Star Schema modeling for business intelligence.",
    tags: ["Data Engineering", "SQL", "ETL", "Architecture"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Sharan171111/Data_warehouse_project"
  },
  {
    title: "Video Analyzer Platform",
    problem: "Processing large video files efficiently while keeping the user informed of the progress was challenging.",
    approach: "Built a decoupled architecture using a Python FastAPI backend and a React frontend, utilizing MongoDB and Socket.IO.",
    toolsSummary: "Python, FastAPI, React, MongoDB, Socket.IO",
    impact: "Enabled scalable processing of video content with real-time updates seamlessly delivered to the frontend client.",
    tags: ["Python", "React", "FastAPI", "Full-Stack Dev"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Sharan171111/Video-analyzer"
  },
  {
    title: "Phishing Website Detection",
    problem: "Users frequently fall victim to sophisticated phishing attacks that are hard to detect manually.",
    approach: "Trained an XGBoost machine learning model on URL-based features to predict whether a given URL is legitimate or phishing.",
    toolsSummary: "Python, XGBoost, Machine Learning, URL Features",
    impact: "Created a predictive model capable of reliably identifying fraudulent websites to enhance cybersecurity.",
    tags: ["Machine Learning", "Python", "Security", "XGBoost"],
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Sharan171111/Final_year_project"
  },
  {
    title: "Quantum Image Steganography",
    problem: "Traditional steganography methods are becoming vulnerable to advanced computational attacks.",
    approach: "Implemented simulated quantum rotation techniques in a Flask web application for high-security data hiding.",
    toolsSummary: "Python, Flask, HTML, Steganography",
    impact: "Provides highly secure image-based data encryption featuring built-in QR code generation and PSNR analysis.",
    tags: ["Security", "Python", "Flask", "Cryptography"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Sharan171111/-Image-Steganography-useing-Quantum-Technology"
  },
  {
    title: "Netflix Power BI EDA",
    problem: "Understanding content distribution and trends on Netflix required digesting massive CSV datasets.",
    approach: "Performed extensive Exploratory Data Analysis (EDA) on the Netflix dataset and built visual reporting dashboards.",
    toolsSummary: "Power BI, Data Analytics, Dashboards",
    impact: "Developed interactive dashboards highlighting key content trends, distribution patterns, and insights.",
    tags: ["Power BI", "Data Analytics", "EDA", "Dashboards"],
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Sharan171111/netflix-powerbi-eda"
  },
  {
    title: "Data Science Internship Analysis",
    problem: "Raw datasets required extensive cleaning and exploration to be useful for predictive modeling.",
    approach: "Performed in-depth data processing, geospatial analysis, and feature engineering using Python in Google Colab.",
    toolsSummary: "Python, Jupyter Notebook, Pandas, Geospatial",
    impact: "Successfully cleaned and engineered features for complex datasets, paving the way for downstream machine learning tasks.",
    tags: ["Data Science", "Python", "Jupyter", "Analysis"],
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Sharan171111/data-science-internship"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Trilliant Digital",
    role: "MarTech Trainee (Analytics & Development)",
    period: "Aug 2025 - Nov 2025",
    highlights: [
      "Engineered automated data pipelines to extract API metrics from Google and Meta, piping them into structured SQL and BI environments.",
      "Built interactive data visualizations in Power BI, combining frontend UI principles with deep statistical analysis.",
      "Diagnosed technical SEO bottlenecks and deployed web performance improvements, lifting organic site metrics by 25%."
    ]
  },
  {
    company: "New Mangaluru Port Authority",
    role: "IT & Software Intern",
    period: "Feb 2025 - May 2025",
    highlights: [
      "Developed internal monitoring tools to track infrastructure health, applying analytical thinking to resolve operational lag.",
      "Managed Docker-based deployments for in-house software, streamlining the release cycle for backend applications."
    ]
  },
  {
    company: "Seventh Sense Talent Solutions",
    role: "DevOps & Systems Intern",
    period: "Nov 2023 - Dec 2023",
    highlights: [
      "Wrote automation scripts using Bash and Python to scrape system analytics and send alerts.",
      "Supported CI/CD pipelines (GitLab/Jenkins) to ensure seamless software delivery and deployment reliability.",
      "Containerized legacy architectures to modernize the team's software development lifecycle."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Software Development",
    skills: ["JavaScript/TypeScript", "React & Next.js", "Node.js & Express", "Tailwind CSS", "RESTful APIs"],
    icon: "code"
  },
  {
    name: "Data Analytics & BI",
    skills: ["SQL Data Modeling", "Python (NumPy/Pandas)", "Power BI", "ETL Pipelines", "Statistical Analysis"],
    icon: "chart"
  },
  {
    name: "Cloud & DevOps",
    skills: ["Docker & Containers", "Git / CI/CD", "Linux Administration", "n8n Automation", "AWS Basics"],
    icon: "server"
  },
  {
    name: "Systems & Problem Solving",
    skills: ["System Architecture", "Root Cause Analysis", "Database Design", "Agile Workflows", "Data Storytelling"],
    icon: "layers"
  }
];
