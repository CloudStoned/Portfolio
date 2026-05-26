import { Project, ServiceCard } from '../types';

export const services: ServiceCard[] = [
  {
    title: 'Workflow Automation',
    description: 'I map and automate your entire business workflow using n8n — connecting your tools, eliminating manual steps, and making your operations run on autopilot.',
    iconName: 'Zap'
  },
  {
    title: 'AI Agents & Chatbots',
    description: 'I build intelligent AI agents powered by Claude and LangChain that handle conversations, answer questions, qualify leads, and take action — without human input.',
    iconName: 'Bot'
  },
  {
    title: 'System Integration & RAG',
    description: 'I connect your existing tools, databases, and documents into one intelligent system — so your team gets instant answers and your data actually works for you.',
    iconName: 'Database'
  }
];

export const techStack = {
  ai: ['n8n', 'Claude API', 'LangChain', 'LangGraph', 'LangSmith', 'RAG', 'Vector Databases', 'Prompt Engineering'],
  dev: ['Python', 'JavaScript', 'FastAPI', 'Ruby on Rails', 'RESTful APIs', 'PostgreSQL', 'Docker', 'Heroku', 'Git'],
  tools: ['ChatGPT', 'Jira', 'Webhook', 'Roboflow', 'YOLOv8', 'ResNet']
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Agentic Voice & Sales AI (n8n)',
    description: 'Telegram-triggered multi-agent AI platform with RAG, Supabase vector storage, ElevenLabs voice agent, Pipedrive CRM integration, and automated lead qualification.',
    automationAngle: 'Fully automated sales pipeline — from lead capture to CRM entry — with zero manual input.',
    tags: ['n8n', 'RAG', 'ElevenLabs', 'Pipedrive', 'Supabase'],
    category: 'workflows'
  },
  {
    id: 2,
    title: 'Leaf Image Classification System',
    description: 'Deep learning system using YOLOv8 for leaf classification, benchmarked against ResNet, annotated via Roboflow. Optimized for production deployment.',
    tags: ['Python', 'YOLOv8', 'ResNet', 'Roboflow', 'Deep Learning'],
    category: 'deep-learning'
  },
  {
    id: 3,
    title: 'RAG Q&A System',
    description: 'Internal document Q&A system reducing manual search time and improving response accuracy for end users.',
    automationAngle: 'Replaced hours of manual document searching with instant AI-powered answers.',
    tags: ['RAG', 'LangChain', 'Vector DB', 'Python'],
    category: 'rag'
  },
  {
    id: 4,
    title: 'AI Content Automation Engine',
    description: 'Automated quiz and lesson plan generation pipeline replacing manual document scanning and drafting — enabling scalable curriculum production.',
    automationAngle: 'Turned a days-long manual process into a fully automated pipeline.',
    tags: ['LLM APIs', 'Python', 'Automation', 'Prompt Engineering'],
    category: 'workflows'
  }
];

export const certifications = [
  'Oracle Certified Professional Generative AI',
  'Oracle Certified Foundations Associate',
  'Develop LLM Powered AI Agents with LangGraph',
  'The Complete Agentic AI Engineering Course',
  'AI Builder: Create Agents, Voice Agents & Automations in n8n',
  'CompTIA IT Fundamentals+ (ITF+)'
];
