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
    "Supabase",
    "Git",
    "Docker",
    "Twilio",
    "GHL",
  ],
};

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Voice Receptionist",
    description:
      "n8n voice-call automation that triages inbound calls into damage claims and general inquiries, transcribes and stores call recordings, and auto-notifies homeowners and adjusters by email.",
    automationAngle:
      "Replaced manual call triage and note-taking with an always-on receptionist that logs and routes every call automatically.",
    tags: ["n8n", "Webhook", "Gmail", "Supabase", "Call Transcription"],
    category: "workflows",
    image: "/projects/ai-receptionist.png",
  },
  {
    id: 2,
    title: "Facebook Messenger AI Bot",
    description:
      "Webhook-driven Messenger bot powered by an OpenRouter AI agent with memory, capable of holding context-aware conversations and taking actions via the Facebook Graph API.",
    automationAngle:
      "Turned Facebook DMs into a self-service conversation channel with zero manual replies.",
    tags: ["n8n", "Facebook Graph API", "OpenRouter", "AI Agent", "Webhook"],
    category: "workflows",
    image: "/projects/fb-bot.png",
  },
  {
    id: 3,
    title: "AI Job Application Scraper",
    description:
      "Chat-triggered n8n agent that searches live job postings via RapidAPI, uses a Gemini AI agent with structured output to evaluate fit, then locates, copies, and tailors a resume in Google Drive for each match.",
    automationAngle:
      "Automated the entire job-hunting loop — from search to a tailored, ready-to-send resume.",
    tags: ["n8n", "RapidAPI", "Google Gemini", "Google Drive", "Structured Output"],
    category: "workflows",
    image: "/projects/job-scraper.png",
  },
  {
    id: 4,
    title: "Lead Gen Automation",
    description:
      "A multi-stage n8n workflow that scrapes local business data from Google Maps via Apify, deduplicates and filters leads, then uses a Gemini AI agent to scrape each site for emails/socials and generate personalized outreach emails logged straight to Google Sheets.",
    automationAngle:
      "Transformed raw web scraping into a self-cleaning leads pipeline with AI-personalized outreach, populating Google Sheets in real-time.",
    tags: ["n8n", "Apify", "Gemini API", "Google Sheets", "Workflow Automation"],
    category: "workflows",
    image: "/projects/lead-gen.png",
  },
  {
    id: 5,
    title: "Leaf Image Classification System",
    description:
      "Deep learning system using YOLOv8 for leaf classification, benchmarked against ResNet, annotated via Roboflow. Optimized for production deployment.",
    tags: ["Python", "YOLOv8", "ResNet", "Roboflow", "Deep Learning"],
    category: "deep-learning",
  },
  {
    id: 6,
    title: "RAG Q&A System",
    description:
      "Internal document Q&A system reducing manual search time and improving response accuracy for end users.",
    automationAngle:
      "Replaced hours of manual document searching with instant AI-powered answers.",
    tags: ["RAG", "LangChain", "Vector DB", "Python"],
    category: "web-app",
  },
  {
    id: 7,
    title: "Cart Snap",
    description:
      "A smart, real-time web-based grocery assistant and budget tracker. It helps users manage their shopping basket, capture photos of items, manually log pricing, organize products by custom departments, and track total expenditures in real time against a personal budget limit.",
    automationAngle: "",
    tags: ["NextJS", "Google AI Studio", "Google Stitch", "Antigravity"],
    category: "web-app",
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
