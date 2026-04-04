
export interface Project {
  title: string;
  problem: string;
  approach: string;
  toolsSummary: string;
  impact: string;
  tags: string[];
  link?: string;
  image: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
  icon: string;
}
