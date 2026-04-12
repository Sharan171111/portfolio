import { Project, Experience, SkillCategory } from './types';

const COMMON_GITHUB_LINK = "https://github.com/Sharan171111?tab=repositories";

export const PROJECTS: Project[] = [
  {
    title: "Healthcare Workflow & Insights Platform",
    problem: "Clinics face fragmented patient data, creating a massive disconnect between software usability and data-driven medical decisions.",
    approach: "Architected a full-stack web application using React and Node.js that securely centralizes patient inputs, while building complex SQL pipelines to surface medical KPIs in real-time dashboards.",
    toolsSummary: "React, TypeScript, Node.js, Supabase, PostgreSQL, Tailwind",
    impact: "Delivered a dual-purpose solution: a highly intuitive frontend software for staff, and a robust data model generating actionable analytics for management.",
    tags: ["Full-Stack Dev", "SQL", "React", "Data Engineering", "UI/UX"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    link: COMMON_GITHUB_LINK
  },
  {
    title: "Modern Data Pipeline & API Service",
    problem: "Cross-functional teams need both clean historical data for analytics and lightning-fast API responses for live applications.",
    approach: "Built an ETL-driven data warehouse using Python and SQL to clean operational records, and wrapped it in a fast RESTful API using Express.js to serve data to frontend clients.",
    toolsSummary: "Python, SQL, Node.js, Express, Star Schema, ETL",
    impact: "Bridged the gap between Software Development and Business Intelligence by building a system that serves both applications and BI dashboards flawlessly.",
    tags: ["Backend Dev", "ETL", "Python", "API Design", "Data Modeling"],
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800",
    link: COMMON_GITHUB_LINK
  },
  {
    title: "StegaQNN Security Engine",
    problem: "High-level security systems often rely on heavy scripts that are difficult to integrate into modern software applications or analyze at scale.",
    approach: "Developed a core security/embedding algorithm in Python and integrated it into a Flask web architecture to allow users to interact with secure data visually.",
    toolsSummary: "Python, Flask, NumPy, OpenCV, Web UI",
    impact: "Created a bridge between hardcore algorithmic analysis and user-facing software, allowing complex security operations to run via web requests.",
    tags: ["Software Architecture", "Python", "Security", "Algorithms", "Web Dev"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    link: COMMON_GITHUB_LINK
  },
  {
    title: "Automated Marketing BI System",
    problem: "Marketing teams were manually pulling metrics, which wasted engineering time and delayed critical analytical insights.",
    approach: "Engineered webhooks and automated workflows (n8n/Python) to scrape and aggregate APIs, feeding directly into a React admin panel and PowerBI dashboards.",
    toolsSummary: "n8n, REST APIs, React, Python, Power BI, SQL",
    impact: "Eliminated manual data engineering, completely automating the extraction process and providing instantaneous analytics to stakeholders.",
    tags: ["Automation", "APIs", "Power BI", "React", "System Integration"],
    image: "https://images.unsplash.com/photo-1518433278981-2a268a88f7fd?auto=format&fit=crop&q=80&w=800",
    link: COMMON_GITHUB_LINK
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
