
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  category: 'web' | 'mobile' | 'ai' | 'iot' | 'networking';
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Networking' | 'IoT' | 'Cloud';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}
