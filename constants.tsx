import { Project, Experience, SkillCategory } from './types';

const COMMON_GITHUB_LINK = "https://github.com/Sharan171111?tab=repositories";

export const PROJECTS: Project[] = [
  {
    title: "Healthcare Insights Platform",
    problem: "Patients and care teams often struggle with fragmented symptom, appointment, and follow-up data, which slows decision-making and weakens service visibility.",
    approach: "Designed a healthcare workflow platform that centralizes user inputs, structures operational data, and surfaces decision-support insights through a responsive product experience.",
    toolsSummary: "React, TypeScript, Supabase, OpenAI, SQL",
    impact: "Demonstrated how a data-backed product can improve information access, support faster triage, and create a stronger foundation for patient experience reporting.",
    tags: ["Product Analytics", "SQL", "Dashboard Thinking", "Data Workflow", "UX"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    link: COMMON_GITHUB_LINK
  },
  {
    title: "Modern SQL Data Warehouse",
    problem: "Business reporting becomes unreliable when operational data is spread across raw tables with inconsistent definitions and no analytics-ready structure.",
    approach: "Built a medallion-style warehouse with staged transformations, star schema modeling, and reusable SQL layers to support cleaner KPI reporting and trend analysis.",
    toolsSummary: "SQL, ETL, Star Schema, Data Modeling, BI Reporting",
    impact: "Created a scalable analytics foundation for faster reporting, clearer metric definitions, and easier downstream dashboard development.",
    tags: ["SQL", "ETL", "Star Schema", "KPI Reporting", "Data Modeling"],
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800",
    link: COMMON_GITHUB_LINK
  },
  {
    title: "StegaQNN Security Analytics Prototype",
    problem: "Sensitive information requires secure handling, but teams also need traceability and controlled retrieval when working with protected digital assets.",
    approach: "Developed a Python-based prototype for secure image data embedding and retrieval, combining algorithm design with structured validation for accuracy and reliability.",
    toolsSummary: "Python, NumPy, Flask, OpenCV",
    impact: "Showcased analytical problem-solving in a high-risk context by balancing security, retrieval logic, and system usability.",
    tags: ["Python", "Analytical Thinking", "Validation", "Security", "Prototype"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    link: COMMON_GITHUB_LINK
  },
  {
    title: "Marketing Reporting Automation",
    problem: "Manual campaign reporting creates delays, inconsistent updates, and limited visibility into lead performance across channels.",
    approach: "Automated data collection and reporting workflows to move campaign data from APIs into trackable outputs for recurring dashboard and stakeholder needs.",
    toolsSummary: "n8n, Python, REST APIs, Power BI, Excel",
    impact: "Reduced reporting friction, improved data availability, and supported faster business decisions for performance marketing teams.",
    tags: ["Automation", "Power BI", "APIs", "Reporting", "Process Improvement"],
    image: "https://images.unsplash.com/photo-1518433278981-2a268a88f7fd?auto=format&fit=crop&q=80&w=800",
    link: COMMON_GITHUB_LINK
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Trilliant Digital",
    role: "Digital Marketing Technology Trainee",
    period: "Aug 2025 - Nov 2025",
    highlights: [
      "Built automated Power BI and Looker Studio dashboards to track campaign, lead, and channel performance for faster weekly reporting.",
      "Connected marketing data sources through n8n workflows, reducing manual data handling and improving reporting consistency.",
      "Analyzed funnel performance across Google, Meta, and LinkedIn campaigns to identify drop-offs and support budget optimization decisions.",
      "Recommended SEO and performance improvements that contributed to a 25% increase in organic visibility."
    ]
  },
  {
    company: "New Mangaluru Port Authority",
    role: "IT Intern",
    period: "Feb 2025 - May 2025",
    highlights: [
      "Monitored operational systems and translated infrastructure issues into actionable updates for smoother day-to-day support.",
      "Maintained Docker-based environments for internal applications, improving deployment reliability and reducing setup inconsistencies."
    ]
  },
  {
    company: "Seventh Sense Talent Solutions",
    role: "DevOps Intern",
    period: "Nov 2023 - Dec 2023",
    highlights: [
      "Supported CI/CD workflows with GitLab CI and Jenkins to improve release consistency and reduce manual deployment effort.",
      "Containerized legacy applications to standardize environments across teams and simplify handoffs.",
      "Automated recurring infrastructure checks with scripting, helping the team identify issues earlier."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Data Analysis",
    skills: ["SQL", "Python", "Excel", "Power BI", "EDA"],
    icon: "code"
  },
  {
    name: "BI & Reporting",
    skills: ["Dashboard Design", "KPI Tracking", "Looker Studio", "Data Storytelling", "Stakeholder Reporting"],
    icon: "chart"
  },
  {
    name: "Business Problem Solving",
    skills: ["Requirements Gathering", "Root Cause Analysis", "Process Improvement", "Data Validation", "Decision Support"],
    icon: "layers"
  },
  {
    name: "Tools & Automation",
    skills: ["n8n", "REST APIs", "Postman", "Google Analytics", "Git"],
    icon: "terminal"
  }
];
