
import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'IoT Based Pesticide Sprayer',
    description: 'An IoT-enabled system using ESP32-CAM and GPS for real-time monitoring. Reduced chemical wastage by 40% with 98% accuracy.',
    tags: ['ESP32-CAM', 'GPS', 'IoT', 'Mobile App'],
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    link: '#',
    category: 'iot'
  },
  {
    id: '2',
    title: 'Adaptive Air Brake System',
    description: 'Commercial vehicle speed control system developed using Arduino Nano and pressure sensors for driver safety.',
    tags: ['Arduino', 'Sensors', 'Embedded Systems'],
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
    link: '#',
    category: 'iot'
  },
  {
    id: '3',
    title: 'Django Pet Care Shop',
    description: 'Full-stack web application with e-commerce features, service booking, and secure authentication.',
    tags: ['Python', 'Django', 'E-commerce', 'Full Stack'],
    imageUrl: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=800',
    link: '#',
    category: 'web'
  },
  {
    id: '4',
    title: 'AWS Cloud Hosting Infrastructure',
    description: 'Hands-on deployment using EC2, S3, IAM, and Lambda for scalable application hosting.',
    tags: ['AWS', 'Cloud Architecture', 'Lambda', 'EC2'],
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    link: '#',
    category: 'networking'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Networking (CCNA)', level: 95, category: 'Networking' },
  { name: 'IoT & Embedded', level: 90, category: 'IoT' },
  { name: 'Python', level: 85, category: 'Backend' },
  { name: 'AWS Cloud', level: 80, category: 'Cloud' },
  { name: 'C/C++', level: 75, category: 'Backend' },
  { name: 'Web Dev (HTML/CSS)', level: 70, category: 'Frontend' },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Aventro Technologies Pvt Ltd',
    role: 'AI & Cloud Intern',
    period: 'Sept - Oct 2025',
    description: 'Focused on AWS Fundamentals and AI-driven YouTube Income Systems, mastering scalable digital systems.'
  },
  {
    company: 'ReTech Solutions Pvt Ltd',
    role: 'Full Stack Intern',
    period: 'Feb 2025',
    description: 'Developed a Django-based Pet Care Shop with structured database management and authentication.'
  }
];
