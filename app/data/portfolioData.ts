import { Project, ServiceCard } from "../types";

export const services: ServiceCard[] = [
  {
    title: "Workflow Automation",
    description:
      "I take the repetitive, manual steps eating up your team's day data entry, follow-ups, scheduling, reporting and turn them into a system that runs itself, 24/7, without anyone babysitting it.",
    iconName: "Zap",
  },
  {
    title: "AI Agents & Chatbots",
    description:
      "I build always-on assistants that talk to your customers, answer their questions, qualify leads, and take action on your behalf so nobody's ever waiting on a reply, even at 2am.",
    iconName: "Bot",
  },
  {
    title: "Systems & Data Integration",
    description:
      "I connect the tools and documents you already use into one system that gives your team instant answers no more digging through folders or asking around for the right file.",
    iconName: "Database",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Voice Receptionist",
    description:
      "An always-on phone system that answers every inbound call, sorts damage claims from general questions, transcribes the conversation, and automatically notifies the right person by email — so no call goes unanswered and nothing gets written down by hand.",
    automationAngle:
      "Replaced manual call triage and note-taking with a receptionist that never misses a call and routes every one of them automatically.",
    tags: ["Inbound Call Handling", "Auto-Transcription", "Smart Routing", "Email Notifications"],
    category: "automation",
    image: "/projects/ai-receptionist.png",
  },
  {
    id: 2,
    title: "Facebook Messenger AI Bot",
    description:
      "A Messenger assistant that holds real, context-aware conversations with customers and can take action on their behalf — checking orders, answering questions, or escalating when needed — without a human typing a single reply.",
    automationAngle:
      "Turned Facebook DMs into a self-service channel — customers get instant, accurate answers any time of day, with zero manual replies.",
    tags: ["Facebook Messenger", "Always-On Replies", "Context-Aware Conversations", "Zero Manual Replies"],
    category: "ai-agents",
    image: "/projects/fb-bot.png",
  },
  {
    id: 3,
    title: "AI Research & Matching Agent",
    description:
      "An agent that searches live postings, evaluates each one against a set of criteria, then prepares a tailored, ready-to-send document for every match — originally built for job hunting, the same pattern powers lead qualification, candidate screening, or content personalization for any business.",
    automationAngle:
      "Automated an entire search-and-match workflow end to end — from finding the right opportunities to producing a tailored result, with no manual review needed.",
    tags: ["Automated Search", "AI Matching", "Personalized Output", "Document Generation"],
    category: "ai-agents",
    image: "/projects/job-scraper.png",
  },
  {
    id: 4,
    title: "Lead Gen Automation",
    description:
      "A pipeline that finds local businesses matching your ideal customer profile, removes duplicates and dead ends, then researches each one and writes a personalized outreach message — landing straight in a spreadsheet, ready to send.",
    automationAngle:
      "Turned hours of manual prospecting and copy-pasting into a self-cleaning leads list with ready-to-send, personalized outreach — updating in real time.",
    tags: ["Lead Discovery", "Auto-Deduplication", "Personalized Outreach", "Live Spreadsheet Sync"],
    category: "automation",
    image: "/projects/lead-gen.png",
  },
  {
    id: 5,
    title: "Internal Knowledge Assistant",
    description:
      "An internal assistant that answers questions about your company's own documents instantly and accurately — so your team stops digging through folders or asking around for the right file.",
    automationAngle:
      "Replaced hours of manual document searching with instant, accurate answers pulled straight from your own files.",
    tags: ["Instant Answers", "Document Search", "Company Knowledge Base", "Reduced Search Time"],
    category: "integration",
  },
];

export const certifications = [
  "Oracle Certified Professional Generative AI",
  "Oracle Certified Foundations Associate",
  "Develop LLM Powered AI Agents with LangGraph",
  "The Complete Agentic AI Engineering Course",
  "AI Builder: Create Agents, Voice Agents & Automations in n8n",
];
