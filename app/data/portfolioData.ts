import { Project, ServiceCard } from "../types";

export const services: ServiceCard[] = [
  {
    title: "Workflow Automation",
    description:
      "I map and automate your entire business workflow using n8n — connecting your tools, eliminating manual steps, and making your operations run on autopilot.",
    iconName: "Zap",
  },
  {
    title: "AI Agents & Chatbots",
    description:
      "I build intelligent AI agents powered by Claude and LangChain that handle conversations, answer questions, qualify leads, and take action — without human input.",
    iconName: "Bot",
  },
  {
    title: "System Integration & RAG",
    description:
      "I connect your existing tools, databases, and documents into one intelligent system — so your team gets instant answers and your data actually works for you.",
    iconName: "Database",
  },
];

export const techStack = {
  ai: [
    "n8n",
    "Zapier",
    "Make",
    "Anthropic Claude (API, Claude Code, MCP)",
    "LangChain",
    "LangGraph",
    "LangSmith",
    "RAG",
    "Vector Databases",
    "Prompt Engineering",
    "Gemini API",
    "ElevenLabs",
    "Supabase",
    "OpenRouter",
  ],
  dev: ["Python", "NextJs", "FastAPI", "RESTful APIs", "Webhook"],
  tools: [
    "ChatGPT",
    "Jira",
    "Heroku",
    "PostgreSQL",
    "Git",
    "Docker",
    "Twilio",
    "GHL",
  ],
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Agentic Voice & Sales AI",
    description:
      "Telegram-triggered multi-agent AI platform with RAG, Supabase vector storage, ElevenLabs voice agent, Pipedrive CRM integration, and automated lead qualification.",
    automationAngle:
      "Fully automated sales pipeline — from lead capture to CRM entry — with zero manual input.",
    tags: ["n8n", "RAG", "ElevenLabs", "Pipedrive", "Supabase", "OpenRouter"],
    category: "workflows",
  },
  {
    id: 2,
    title: "Leaf Image Classification System",
    description:
      "Deep learning system using YOLOv8 for leaf classification, benchmarked against ResNet, annotated via Roboflow. Optimized for production deployment.",
    tags: ["Python", "YOLOv8", "ResNet", "Roboflow", "Deep Learning"],
    category: "deep-learning",
  },
  {
    id: 3,
    title: "RAG Q&A System",
    description:
      "Internal document Q&A system reducing manual search time and improving response accuracy for end users.",
    automationAngle:
      "Replaced hours of manual document searching with instant AI-powered answers.",
    tags: ["RAG", "LangChain", "Vector DB", "Python"],
    category: "rag",
  },
  {
    id: 4,
    title: "AI Content Automation Engine",
    description:
      "Automated quiz and lesson plan generation pipeline replacing manual document scanning and drafting — enabling scalable curriculum production.",
    automationAngle:
      "Turned a days-long manual process into a fully automated pipeline.",
    tags: ["OpenAI", "Python", "Automation", "Prompt Engineering"],
    category: "workflows",
  },
  {
    id: 5,
    title: "Lead Gen Automation",
    description:
      "A multi-stage n8n workflow that scrapes local business data via Apify, utilizes Gemini API to extract and clean emails and social links from HTML, and saves structured leads in Google Sheets.",
    automationAngle:
      "Transformed raw web scraping into a self-cleaning leads pipeline that populates Google Sheets in real-time.",
    tags: [
      "n8n",
      "Apify",
      "Gemini API",
      "Google Sheets",
      "Workflow Automation",
    ],
    category: "workflows",
  },
  {
    id: 6,
    title: "Cart Snap",
    description:
      "A smart, real-time web-based grocery assistant and budget tracker. It helps users manage their shopping basket, capture photos of items, manually log pricing, organize products by custom departments, and track total expenditures in real time against a personal budget limit.",
    automationAngle: "",
    tags: ["NextJS", "Google AI Studio", "Google Stitch", "Antigravity"],
    category: "",
  },
];

export const certifications = [
  "Oracle Certified Professional Generative AI",
  "Oracle Certified Foundations Associate",
  "Develop LLM Powered AI Agents with LangGraph",
  "The Complete Agentic AI Engineering Course",
  "AI Builder: Create Agents, Voice Agents & Automations in n8n",
  "CompTIA IT Fundamentals+ (ITF+)",
];
