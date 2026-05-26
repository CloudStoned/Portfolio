export interface Project {
  id: number;
  title: string;
  description: string;
  automationAngle?: string;
  tags: string[];
  category: 'workflows' | 'deep-learning' | 'rag';
}

export interface ServiceCard {
  title: string;
  description: string;
  iconName: 'Zap' | 'Bot' | 'Database';
}

export interface InquireRecord {
  id: string;
  name: string;
  email: string;
  business: string;
  message: string;
  date: string;
}
