/**
 * Application-wide type definitions for the portfolio resume data.
 * These interfaces enforce type safety across all components that consume resume data.
 */

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  summary: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  duration: string;
  highlights: string[];
}

export interface Project {
  company: string;
  role: string;
  location: string;
  duration: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  graduated: string;
  cgpa: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ResumeData {
  personal: PersonalInfo;
  experience: Experience[];
  projects: Project[];
  education: Education[];
  skills: SkillCategory[];
  certifications: string[];
  softSkills: string[];
  languages: string[];
}
