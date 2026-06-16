import { ResumeData } from '../models/resume.model';

export const RESUME_DATA: ResumeData = {
  personal: {
    name: 'Akshaya Rachabattula',
    title: 'Product-Oriented .NET Developer | Cloud DevOps Engineer | Agile Practitioner',
    email: 'rachabattulaakshaya@gmail.com',
    phone: '+91 8008552718',
    location: 'Hyderabad, Telangana',
    linkedin: 'https://www.linkedin.com/in/akshaya-rachabattula',
    summary:
      "I'm a software engineer with 3.5+ years of experience building enterprise applications for large-scale clients like MassMutual Insurance at DXC Technology. I work across the full stack using .NET, C#, and SQL Server on the backend, with cloud deployments on AWS. Beyond writing code, I lead sprint ceremonies, manage CI/CD pipelines, and communicate technical decisions clearly to non-technical stakeholders. I'm comfortable collaborating across teams — working alongside business analysts, QA, and product owners to make sure we're solving the right problems the right way. I take pride in clean, maintainable code and have a strong eye for debugging complex systems. Now I'm channeling that hands-on engineering experience into product thinking — focusing on strategy, user needs, and cross-functional leadership to deliver solutions that truly matter.",
  },
  experience: [
    {
      company: 'Infor Pvt Ltd',
      role: 'Cybersecurity Analyst',
      location: 'Hyderabad, Telangana',
      duration: 'Sep 2025 – Present',
      highlights: [
        'Perform SAST (Static Application Security Testing) and DAST (Dynamic Application Security Testing) scans on applications to identify security vulnerabilities across the software development lifecycle.',
        'Analyze scan results, detect security issues, and raise detailed Jira tickets to inform and guide development teams toward timely remediation.',
        'Collaborate closely with developers to explain vulnerabilities, suggest fixes, and verify that reported issues are resolved effectively.',
        'Designed and developed an in-house SAST scanning tool that allows users to upload a project folder and automatically detect security vulnerabilities — reducing dependency on third-party tools and improving scan turnaround time.',
        'Contribute to application development on required internal projects, bringing both a security and engineering mindset to the codebase.',
        'Work across cross-functional teams to ensure security best practices are followed from the early stages of development through deployment.',
      ],
    },
    {
      company: 'DXC Technology',
      role: 'Analyst II Software Engineering',
      location: 'Chennai, Tamil Nadu',
      duration: 'Sep 2022 – Aug 2025',
      highlights: [
        'Developed and maintained client-facing applications for MassMutual Insurance using VB.NET, C#, and .NET Framework.',
        'Debugged, tested, and optimized legacy code to improve system performance and reduce downtime.',
        'Collaborated with cross-functional teams to gather requirements, design software components, and implement RESTful APIs.',
        'Utilized SQL Server for data querying, stored procedures, and performance tuning.',
        'Worked with mainframe systems and batch processing as part of legacy integrations.',
        'Led sprint planning and backlog grooming sessions, collaborated with the Scrum Master to maintain team velocity.',
        'Participated in sprint planning, code reviews, and agile ceremonies to ensure timely project delivery.',
        'Initiated automation and process enhancements leading to improved software deployment cycles.',
      ],
    },
  ],
  projects: [
    {
      company: 'Digital Lync',
      role: 'Cloud DevOps Intern',
      location: 'Hyderabad, Telangana',
      duration: 'Dec 2023 – Feb 2024',
      highlights: [
        'Deployed and managed AWS infrastructure services like EC2, ELB, Auto Scaling, S3, IAM, RDS, VPC, and CloudFormation.',
        'Built CI/CD pipelines using Git, GitHub, Jenkins, Docker, and Kubernetes.',
        'Automated infrastructure provisioning and configuration using Terraform and Ansible.',
      ],
    },
    {
      company: 'IBOT Control Systems Pvt. Ltd',
      role: 'Web Development Intern – Python',
      location: 'Hyderabad, Telangana',
      duration: 'Dec 2020 – Mar 2021',
      highlights: [
        'Developed interactive web applications using HTML, CSS, JavaScript, and XML.',
        'Designed front-end features and enhanced UI responsiveness using modern design principles.',
      ],
    },
  ],
  education: [
    {
      institution: "Sridevi Women's Engineering College",
      degree: 'Bachelor of Technology (B.Tech) – Electronics and Communication Engineering (ECE)',
      location: 'Hyderabad, Telangana',
      graduated: 'May 2022',
      cgpa: '6.85/10',
    },
  ],
  skills: [
    {
      category: 'Cybersecurity',
      skills: [
        'SAST & DAST Testing',
        'Vulnerability Assessment & Reporting',
        'Jira (Bug & Ticket Management)',
        'Secure Code Review',
        'Tool Development',
        'Application Security',
        'Cross-functional Collaboration',
      ],
    },
    {
      category: 'Product Management',
      skills: [
        'Agile & Scrum Methodologies',
        'Sprint Planning & Agile Ceremonies',
        'Product Roadmapping',
        'SDLC',
        'CI/CD & DevOps Culture',
        'Backlog Prioritization & User Story Writing',
      ],
    },
    {
      category: 'Languages & Frameworks',
      skills: [
        'C#',
        'VB.NET',
        'ASP.NET',
        '.NET Framework',
        '.NET Core',
        'Microservices',
        'ADO.NET',
        'Entity Framework',
      ],
    },
    {
      category: 'Web Technologies',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'XML', 'JSON', 'AJAX'],
    },
    {
      category: 'Databases',
      skills: ['Microsoft SQL Server', 'MySQL'],
    },
    {
      category: 'Cloud & DevOps',
      skills: [
        'AWS (EC2, S3, RDS, IAM, VPC, CloudWatch, CloudFormation, Elastic Beanstalk)',
        'Terraform',
        'Ansible',
      ],
    },
    {
      category: 'Version Control',
      skills: ['Git', 'TFS'],
    },
    {
      category: 'Tools',
      skills: ['JIRA', 'Confluence', 'Figma', 'Azure DevOps', 'Jenkins', 'Docker', 'Kubernetes'],
    },
  ],
  certifications: [
    'Certified ScrumMaster® (CSM) – Scrum Alliance',
    'Product Management Certificate – Coursera/edX/LinkedIn Learning',
    'VB.NET Online Course – Certificate of Completion',
  ],
  softSkills: [
    'Strong analytical and debugging skills',
    'Effective communication and collaboration',
    'Agile & Scrum adaptability',
    'Attention to detail and continuous learning mindset',
  ],
  languages: ['English', 'Hindi', 'Telugu'],
};
