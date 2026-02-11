
import React from 'react';
import { 
  Code2, 
  BarChart3, 
  Terminal, 
  Layers, 
  Cpu, 
  Globe 
} from 'lucide-react';
import { Project, Experience, SkillCategory } from './types';

const COMMON_GITHUB_LINK = "https://github.com/Sharan171111?tab=repositories";

export const PROJECTS: Project[] = [
  {
    title: "SensiDoc Healthcare Platform",
    description: "A secure, AI-powered healthcare ecosystem. Features AI-driven symptom analysis using OpenAI, real-time database management with Supabase, and a high-performance TypeScript frontend.",
    tags: ["React", "TypeScript", "Node.js", "OpenAI", "Supabase"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    link: COMMON_GITHUB_LINK
  },
  {
    title: "Modern SQL Data Warehouse",
    description: "End-to-end data engineering ecosystem implementing Medallion Architecture (Bronze/Silver/Gold). Features complex ETL pipelines, Star Schema modeling, and SQL-driven business intelligence dashboards.",
    tags: ["SQL", "Medallion Arch", "ETL", "Star Schema", "Data Modeling"],
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800",
    link: COMMON_GITHUB_LINK
  },
  {
    title: "StegaQNN: Image Steganography",
    description: "Advanced image-in-image steganography utilizing QNN-inspired rotation algorithms. Built with Flask and NumPy to ensure high-security data embedding and retrieval via QR-based indexing.",
    tags: ["Flask", "Python", "NumPy", "OpenCV"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    link: COMMON_GITHUB_LINK
  },
  {
    title: "n8n Automation Ecosystem",
    description: "Enterprise-grade workflow automation. Streamlining complex digital marketing reporting, lead generation notifications, and API-to-Dashboard data pipelines.",
    tags: ["n8n", "Workflow Automation", "Python", "REST API"],
    image: "https://images.unsplash.com/photo-1518433278981-2a268a88f7fd?auto=format&fit=crop&q=80&w=800",
    link: COMMON_GITHUB_LINK
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Trilliant Digital",
    role: "Digital Marketing Technology Trainee",
    period: "Aug 2025 – Nov 2025",
    highlights: [
      "Engineered automated performance dashboards in Power BI and Looker Studio.",
      "Developed custom n8n nodes for campaign reporting and lead tracking.",
      "Optimized multi-channel acquisition funnels (Google, Meta, LinkedIn) using data-driven insights.",
      "Implemented technical SEO strategies that increased organic search visibility by 25%."
    ]
  },
  {
    company: "New Mangaluru Port Authority",
    role: "IT Intern",
    period: "Feb 2025 – May 2025",
    highlights: [
      "Optimized server uptime monitoring systems and network security protocols.",
      "Maintained containerized deployment environments using Docker for port management apps."
    ]
  },
  {
    company: "Seventh Sense Talent Solutions",
    role: "DevOps Intern",
    period: "Nov 2023 – Dec 2023",
    highlights: [
      "Orchestrated CI/CD pipelines using GitLab CI and Jenkins for automated builds.",
      "Containerized legacy applications to improve environment consistency across teams.",
      "Automated routine infrastructure health checks using shell scripting."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Software Architecture",
    skills: ["Python", "TypeScript", "React", "Node.js", "Flask"],
    icon: "code"
  },
  {
    name: "Data Intelligence",
    skills: ["Power BI", "SQL (PostgreSQL/MySQL)", "Looker Studio", "Excel VBA", "EDA"],
    icon: "chart"
  },
  {
    name: "Infrastructure",
    skills: ["Docker", "Kubernetes", "AWS", "GitLab CI/CD", "Jenkins"],
    icon: "layers"
  },
  {
    name: "Automation",
    skills: ["n8n", "Postman", "OpenAI API", "Google Search Console", "Git"],
    icon: "terminal"
  }
];
