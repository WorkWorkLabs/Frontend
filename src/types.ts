export type Language = 'en' | 'zh' | 'es';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  category: string;
  description: string;
  requirements: string[];
  salary: string;
  isRemote: boolean;
  postedAt: Date;
  logoUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  link: string;
}

export interface VisaInfo {
  id: string;
  country: string;
  type: string;
  duration: string;
  requirements: string[];
  processingTime: string;
  cost: string;
}

export interface Course {
  id: string;
  title: string;
  provider: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  imageUrl: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  author: string;
  type: 'Guide' | 'Article' | 'Video' | 'Tool';
  link: string;
  createdAt: Date;
}